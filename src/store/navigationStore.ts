import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavigationState {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
}

const useNavigationStore = create<NavigationState>()(
  devtools(
    // persist(
    (set) => ({
      selectedTab: 0,
      setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
    })
    //   {
    //     name: 'navigation-storage',
    //   }
    // )
  )
);

export default useNavigationStore;
