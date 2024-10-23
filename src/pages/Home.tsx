import  { useState } from 'react';
import { PlaneLanding } from 'lucide-react';
import SearchForm from '../components/SearchForm';
import FlightCard from '../components/FlightCard';
import ErrorMessage from '../components/UI/ErrorMessage';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { Flight, SearchParams } from '../types';
import { searchFlights } from '../utils/api';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    setError(null);

    try {
      const results = await searchFlights(params);
      setFlights(results);
    } catch (err) {
      setError('Failed to fetch flights. Please try again later.');
      console.error('Error fetching flights:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <SearchForm onSearch={handleSearch} loading={loading} />
      </div>

      {error && <ErrorMessage message={error} />}

      <div className="space-y-6">
        {loading ? (
          <LoadingSpinner />
        ) : flights.length > 0 ? (
          flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))
        ) : !error && (
          <div className="text-center py-12">
            <PlaneLanding className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Search for flights to get started</p>
          </div>
        )}
      </div>
    </main>
  );
}