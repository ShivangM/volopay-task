'use client';
import { FiSearch } from 'react-icons/fi';
import { BsFilter } from 'react-icons/bs';
import { data } from '../api.json';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="py-4 px-4 pb-10 sm:px-10 space-y-8 max-w-7xl mx-auto">
      <div className="w-full flex items-center justify-end">
        <div className="flex items-center space-x-4 text-gray-400 cursor-pointer">
          <FiSearch />
          <div className="bg-gray-100 px-2 py-2 flex items-center space-x-1 rounded-lg text-gray-400 cursor-pointer">
            <BsFilter />
            <span>Filter</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card, idx) => {
          return <Card card={card} key={idx} />;
        })}
      </div>
    </main>
  );
}
