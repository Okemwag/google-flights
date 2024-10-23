import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Plane, Users, Calendar } from 'lucide-react';
import { SearchParams } from '../types/flight';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  loading: boolean;
}

export default function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    origin: '',
    destination: '',
    departureDate: new Date(),
    returnDate: undefined,
    passengers: 1,
  });
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="oneWay"
            checked={!isRoundTrip}
            onChange={() => {
              setIsRoundTrip(false);
              setSearchParams(prev => ({ ...prev, returnDate: undefined }));
            }}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="oneWay">One-way</label>
          
          <input
            type="radio"
            id="roundTrip"
            checked={isRoundTrip}
            onChange={() => setIsRoundTrip(true)}
            className="ml-4 w-4 h-4 text-blue-600"
          />
          <label htmlFor="roundTrip">Round-trip</label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Plane className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="From"
            value={searchParams.origin}
            onChange={(e) => setSearchParams(prev => ({ ...prev, origin: e.target.value }))}
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Plane className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="To"
            value={searchParams.destination}
            onChange={(e) => setSearchParams(prev => ({ ...prev, destination: e.target.value }))}
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <DatePicker
            selected={searchParams.departureDate}
            onChange={(date) => setSearchParams(prev => ({ ...prev, departureDate: date || new Date() }))}
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            minDate={new Date()}
            placeholderText="Departure"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            min="1"
            max="9"
            value={searchParams.passengers}
            onChange={(e) => setSearchParams(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
            className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {isRoundTrip && (
          <div className="relative md:col-start-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <DatePicker
              selected={searchParams.returnDate}
              onChange={(date) => setSearchParams(prev => ({ ...prev, returnDate: date || undefined }))}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              minDate={searchParams.departureDate}
              placeholderText="Return"
              required={isRoundTrip}
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </div>
    </form>
  );
}