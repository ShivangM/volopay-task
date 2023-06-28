import { Card } from '@/types/cards';
import React from 'react';

type Props = {
  card: Card;
};

const Card = ({ card }: Props) => {
  return <div>{card.name}</div>;
};

export default Card;
