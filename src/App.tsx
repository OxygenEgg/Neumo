import HomeView from "@/views/homeView.tsx";
import "@/scss/style.scss";
import MusikView from "@/views/musikView.tsx";
import { useViewStore } from "@/store/useViewStore.ts";
import { ReactNode, useMemo } from "react";
import WindowControls from "@/components/windowControls.tsx";
import NavBar from "@/components/navBar.tsx";
import HueView from "@/views/hueView.tsx";
import SettingsView from "@/views/settingsView.tsx";

const App = () => {
    const currentView = useViewStore((state) => state.currentView);
    const viewContent = useMemo(() => {
        const views: Record<View, ReactNode> = {
            Home: <HomeView />,
            Musik: <MusikView />,
            Hue: <HueView />,
            Settings: <SettingsView />,
        };
        return views[currentView];
    }, [currentView]);

    return (
        <>
            <WindowControls />
            <NavBar />
            {viewContent}
        </>
    );
};

export default App;
