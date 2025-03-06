import { create } from 'zustand';
export interface ClassAssignmentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useYoutubeModal = create<ClassAssignmentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

const useFileModal = create<ClassAssignmentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

const useLinkModal = create<ClassAssignmentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export { useYoutubeModal, useLinkModal, useFileModal };
