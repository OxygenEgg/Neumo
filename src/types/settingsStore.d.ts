export interface Settings {
    hueSettings: HueSettings;
}

export interface SettingsActions {
    setHueIP: (ip: string) => void;
    resetAllSettings: () => void;
}

export interface HueSettings {
    ip: string;
}

export type SettingsStore = Settings & SettingsActions;
