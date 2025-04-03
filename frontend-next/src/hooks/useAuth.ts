import { create } from 'zustand';

interface AuthStore {
    loginPhone: string;
    setLoginPhone: (phone: string) => void;
}

export const useAuth = create<AuthStore>((set) => ({
    loginPhone: '',
    setLoginPhone: (phone) => set({ loginPhone: phone }),
}));
