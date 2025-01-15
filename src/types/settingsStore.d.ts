export interface Settings {
    generalSettings: GeneralSettings;
    hueSettings: HueSettings;
}

export interface SettingsActions {
    setUiScaling: (uiScaling: number) => void;
    setHueIP: (ip: string) => void;
    resetAllSettings: () => void;
}

export interface GeneralSettings {
    uiScaling: number;
}

export interface HueSettings {
    ip: string;
}

export type SettingsStore = Settings & SettingsActions;
