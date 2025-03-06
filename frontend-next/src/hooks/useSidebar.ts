import { create } from 'zustand';

interface SidebarStore {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    openSidebar: () => set(() => ({ isSidebarOpen: true })),
    closeSidebar: () => set(() => ({ isSidebarOpen: false })),
}));

export { useSidebar };
export default useSidebar;
