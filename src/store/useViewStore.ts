import { create } from "zustand";

export const useViewStore = create<ViewStore>((set) => ({
    currentView: "Home",
    setView: (view: View) => set({ currentView: view }),
}));
