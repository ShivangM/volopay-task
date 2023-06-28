import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  userId: number;
  setUserId: (userId: number) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        userId: 1,
        setUserId: (id) => set(() => ({ userId: id })),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);

export default useUserStore;
