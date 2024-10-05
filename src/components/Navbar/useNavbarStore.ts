import { create } from 'zustand';

export interface NavState {
  isOpen: undefined | boolean;
  isMobile: undefined | boolean;
  handleOpen: (status: boolean) => void;
  handleMobile: (navigator: string) => void;
}

const useNavbarStore = create<NavState>((set, get) => ({
  isOpen: undefined,
  isMobile: undefined,
  handleOpen: (status) => {
    set((state) => ({
      isOpen: status,
    }));
    return;
  },
  handleMobile: (navigator) => {
    set((state) => ({
      isMobile: /Mobi/i.test(navigator),
    }));
  },
}));

export default useNavbarStore;
