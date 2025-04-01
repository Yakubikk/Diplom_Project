import { create } from 'zustand'

type SidebarStore = {
    open: boolean
    setOpen: () => void
    setClose: () => void
    toggle: () => void
}

export const useSidebar = create<SidebarStore>()((set) => ({
    open: false,
    setOpen: () => set(() => ({ open: true })),
    setClose: () => set(() => ({ open: false })),
    toggle: () => set((state) => ({ open: !state.open }))
}))
