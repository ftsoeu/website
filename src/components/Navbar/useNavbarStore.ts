import { create } from 'zustand';

export interface NavState {
  isOpen: undefined | boolean;
  isMobile: undefined | boolean;
  handleOpen: () => void;
  handleMobile: (navigator: string) => void;
}

const useNavbarStore = create<NavState>((set, get) => ({
  isOpen: undefined,
  isMobile: undefined,
  handleOpen: () => {},
  handleMobile: (navigator) => {
    set((state) => ({
      isMobile: /Mobi/i.test(navigator),
    }));
  },
}));

export default useNavbarStore;
