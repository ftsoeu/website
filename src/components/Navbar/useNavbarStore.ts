import { create } from 'zustand';

export interface NavState {
  isOpen: boolean;
  isMobile: undefined | boolean;
  handleOpen: () => void;
  handleMobile: (navigator: string) => void;
}

const useNavbarStore = create<NavState>((set, get) => ({
  isOpen: false,
  isMobile: undefined,
  handleOpen: () => {},
  handleMobile: (navigator) => {
    set((state) => ({
      isMobile: /Mobi/i.test(navigator),
    }));
  },
}));

export default useNavbarStore;
