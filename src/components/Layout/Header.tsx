import { PlaneLanding } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <PlaneLanding className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Flight Search</h1>
        </div>
      </div>
    </header>
  );
}