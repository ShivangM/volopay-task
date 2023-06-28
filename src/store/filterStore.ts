import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface FilterState {
  subscription: boolean;
  burner: boolean;
  setSubscription: (subscription: boolean) => void;
  setBurner: (burner: boolean) => void;
}

const useFilterStore = create<FilterState>()(
  devtools(
    // persist(
    (set) => ({
      subscription: false,
      burner: false,
      setSubscription: (subscription) =>
        set(() => ({ subscription: subscription })),
      setBurner: (burner) => set(() => ({ burner: burner })),
    })
    //   {
    //     name: 'filter-storage',
    //   }
    // )
  )
);

export default useFilterStore;
