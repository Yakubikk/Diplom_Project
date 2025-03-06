import { create } from 'zustand';

interface JoinModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useJoinModal = create<JoinModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export { useJoinModal };
export default useJoinModal;
