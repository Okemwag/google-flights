// import  { useState } from 'react';
// import { PlaneLanding } from 'lucide-react';
// import SearchForm from './components/SearchForm';
// import FlightCard from './components/FlightCard';
// import { Flight, SearchParams } from './types/flight';

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [flights, setFlights] = useState<Flight[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   const searchFlights = async (params: SearchParams) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-RapidAPI-Key': 'ce1e8a55aemshc34bbf7a3f83adap19f6c7jsn71061d72b11c',
//           'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
//         },
//         body: JSON.stringify({
//           originSkyId: params.origin,
//           destinationSkyId: params.destination,
//           date: params.departureDate.toISOString().split('T')[0],
//           adults: params.passengers,
//           currency: 'USD'
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch flights');
//       }

//       const data = await response.json();
//       setFlights(data.flights || []);
//     } catch (err) {
//       setError('Failed to fetch flights. Please try again later.');
//       console.error('Error fetching flights:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-500">
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
//           <div className="flex items-center space-x-3">
//             <PlaneLanding className="h-8 w-8 text-blue-600" />
//             <h1 className="text-2xl font-bold text-gray-900">Flight Search</h1>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <SearchForm onSearch={searchFlights} loading={loading} />
//         </div>

//         {error && (
//           <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="space-y-6">
//           {loading ? (
//             <div className="text-center py-12">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//               <p className="mt-4 text-gray-600">Searching for the best flights...</p>
//             </div>
//           ) : flights.length > 0 ? (
//             flights.map((flight, index) => (
//               <FlightCard key={index} flight={flight} />
//             ))
//           ) : !error && (
//             <div className="text-center py-12">
//               <PlaneLanding className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <p className="text-gray-600">Search for flights to get started</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import Header from './components/Layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 bg-fixed">
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80")',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;