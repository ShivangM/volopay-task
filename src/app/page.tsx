'use client';
import { FiSearch } from 'react-icons/fi';
import { BsFilter } from 'react-icons/bs';
import { data } from '../api.json';
import Card from '@/components/Card';
import useUserStore from '@/store/userStore';
import useNavigationStore from '@/store/navigationStore';
import { useEffect, useState } from 'react';
import { CardType } from '@/types/cards';

export default function Home() {
  const [userId] = useUserStore((state) => [state.userId]);
  const [selectedTab] = useNavigationStore((state) => [state.selectedTab]);

  const [cards, setCards] = useState<CardType[] | undefined>();

  console.log(userId, selectedTab);

  useEffect(() => {
    if (selectedTab === 0) {
      setCards(data.filter((card) => card.owner_id === userId));
    } else if (selectedTab === 1) {
      setCards(data);
    } else if (selectedTab === 2) {
      setCards(data.filter((card) => card.status === 'blocked'));
    }
  }, [selectedTab, userId]);

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
        {cards?.map((card, idx) => {
          return <Card card={card} key={idx} />;
        })}
      </div>
    </main>
  );
}
