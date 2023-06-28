import { Card } from '@/types/cards';
import classNames from 'classnames';
import React from 'react';
import { BsFire } from 'react-icons/bs';
import { LuRefreshCw } from 'react-icons/lu';

type Props = {
  card: Card;
};

const Card = ({ card }: Props) => {
  const {
    available_to_spend,
    budget_name,
    card_type,
    limit,
    name,
    owner_id,
    spent,
    status,
    expiry,
  } = card;

  return (
    <div className="p-8 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl text-gray-700">{name}</h3>
          <h4 className="text-gray-500">{budget_name} . Budget</h4>
        </div>
        <div
          className={classNames(
            'h-12 w-12 rounded-full bg-opacity-20 flex items-center justify-center text-xl',
            card_type === 'subscription'
              ? 'bg-rose-400 text-rose-500'
              : 'bg-orange-400 text-orange-500'
          )}
        >
          {card_type === 'subscription' ? <BsFire /> : <LuRefreshCw />}
        </div>
      </div>
    </div>
  );
};

export default Card;
