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
    <div className="p-8 shadow-lg rounded-lg bg-white space-y-4">
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

      {/* Expiry and Limit  */}
      <div className="grid grid-cols-3 text-sm">
        <div className="space-y-1 text-gray-400">
          <p>{card_type === 'subscription' ? 'LIMIT' : 'EXPIRY'}</p>
          <b className="text-black">
            {card_type === 'subscription' ? limit : expiry}
          </b>
        </div>

        <div className="space-y-1 text-gray-400">
          <p>STATUS</p>
          <b className="text-black">{status.toLocaleUpperCase()}</b>
        </div>

        <div className="space-y-1 text-gray-400">
          <p>FREQUENCY</p>
          <b className="text-black">Monthly</b>
        </div>
      </div>

      {/* Spent and Balance Comparision  */}
      <div className="w-full flex items-center">
        <div
          style={{
            width: `${
              (spent.value / (spent.value + available_to_spend.value)) * 100
            }%`,
          }}
          className="h-2 bg-green-600 w-full rounded-l-full"
        ></div>
        <div
          style={{
            width: `${
              (available_to_spend.value /
                (spent.value + available_to_spend.value)) *
              100
            }%`,
          }}
          className="h-2 bg-pink-600 w-full rounded-r-full"
        ></div>
      </div>

      {/* Spent and Balance Section  */}
      <div className="space-y-2">
        <div className="flex items-center justify-between w-full">
          <div className="space-x-2 flex items-center">
            <div className="h-2 w-2 bg-green-600 rounded-full" />
            <span className="text-gray-500">Spent</span>
          </div>
          <b>
            {spent.value} {spent.currency}
          </b>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="space-x-2 flex items-center">
            <div className="h-2 w-2 bg-pink-600 rounded-full" />
            <span className="text-gray-500">Balance</span>
          </div>
          <b>
            {available_to_spend.value} {available_to_spend.currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Card;
