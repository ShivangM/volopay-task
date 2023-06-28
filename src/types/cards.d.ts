export type CardType = {
  name: string;
  budget_name: string;
  owner_id: number;
  spent: {
    value: number;
    currency: string;
  };
  available_to_spend: {
    value: number;
    currency: string;
  };
  card_type: string;
  expiry?: string;
  limit: number;
  status: string;
};
