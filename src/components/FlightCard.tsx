import { Plane } from 'lucide-react';
import { Flight } from '../types/flight';

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Plane className="h-6 w-6 text-blue-600 mr-2" />
          <span className="font-semibold text-lg">{flight.airline}</span>
        </div>
        <span className="text-2xl font-bold text-blue-600">${flight.price}</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">Departure</p>
          <p className="font-semibold">{flight.departure.time}</p>
          <p className="text-sm">{flight.departure.airport}</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">{flight.duration}</p>
          <div className="w-full flex items-center justify-center my-2">
            <div className="h-0.5 flex-1 bg-gray-300"></div>
            <Plane className="h-4 w-4 text-gray-400 mx-2 transform rotate-90" />
            <div className="h-0.5 flex-1 bg-gray-300"></div>
          </div>
          <p className="text-sm text-gray-500">{flight.stops} stop{flight.stops !== 1 ? 's' : ''}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Arrival</p>
          <p className="font-semibold">{flight.arrival.time}</p>
          <p className="text-sm">{flight.arrival.airport}</p>
        </div>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Select Flight
      </button>
    </div>
  );
}