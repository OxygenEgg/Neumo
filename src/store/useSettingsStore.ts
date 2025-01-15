import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SettingsStore } from "@/types/settingsStore";
import { DEFAULT_SETTINGS } from "@/constants/settingsStore.ts";

export const useSettingsStore = create(
    persist<SettingsStore>(
        (set) => ({
            ...DEFAULT_SETTINGS,

            setHueIP: (ip) =>
                set((state) => ({
                    hueSettings: {
                        ...state.hueSettings,
                        ip,
                    },
                })),
            resetAllSettings: () => {
                set(DEFAULT_SETTINGS);
            },
        }),
        {
            name: "neumo-settings",
            version: 0.0,
            migrate: (persistedState) => {
                return {
                    ...DEFAULT_SETTINGS,
                    ...(persistedState as SettingsStore),
                };
            },
        },
    ),
);
