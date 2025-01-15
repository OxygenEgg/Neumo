import { useSettingsStore } from "@/store/useSettingsStore.ts";

const HueView = () => {
    const {
        hueSettings: { ip },
    } = useSettingsStore();
    return (
        <main>
            <h1>HUE</h1>
            <p>hello</p>
            <p>{ip}</p>
        </main>
    );
};

export default HueView;
