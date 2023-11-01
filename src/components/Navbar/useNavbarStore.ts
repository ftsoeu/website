import { create } from 'zustand'

export interface NavState {
    isOpen: boolean;
    isMobile: undefined | boolean;
    handleOpen: () => void;
    handleMobile: () => void;
}

const useNavbarStore = create<NavState>((set, get) => ({
    isOpen: false,
    isMobile: undefined,
    handleOpen: () => {},
    handleMobile: () => {}
}))

export default useNavbarStore;