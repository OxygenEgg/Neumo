import { useSettingsStore } from "@/store/useSettingsStore.ts";
import TextInput from "@/components/inputs/textInput.tsx";

const SettingsView = () => {
    const {
        hueSettings: { ip },
        setHueIP,
        resetAllSettings,
    } = useSettingsStore();

    return (
        <main>
            <h1>SETTINGS</h1>
            <button onClick={() => resetAllSettings()}>Reset</button>
            <div>
                <TextInput label={"IP address of the Hue Box"} value={ip} onChange={(e) => setHueIP(e.target.value)} />
            </div>
        </main>
    );
};

export default SettingsView;
