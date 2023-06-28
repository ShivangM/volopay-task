'use client';
import { FiSearch } from 'react-icons/fi';
import { data } from '../api.json';
import Card from '@/components/Card';
import useUserStore from '@/store/userStore';
import useNavigationStore from '@/store/navigationStore';
import { useEffect, useState } from 'react';
import { CardType } from '@/types/cards';
import Filter from '@/components/Filter';

export default function Home() {
  const [userId] = useUserStore((state) => [state.userId]);
  const [selectedTab] = useNavigationStore((state) => [state.selectedTab]);

  const [cards, setCards] = useState<CardType[] | undefined>();

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
          <Filter />
        </div>
      </div>
      {cards?.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards?.map((card, idx) => {
            return <Card card={card} key={idx} />;
          })}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="text-gray-400 text-2xl">No cards found</div>
        </div>
      )}
    </main>
  );
}
