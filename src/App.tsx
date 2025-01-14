import HomeView from "@/views/home";
import Header from "@/components/header";
import "@/App.scss";
import MusikView from "@/views/musik";
import { useViewStore } from "@/store/useViewStore.ts";
import React, { useMemo } from "react";
import WindowControls from "@/components/windowControls";

const App = () => {
    const currentView = useViewStore((state) => state.currentView);
    const viewContent = useMemo(() => {
        switch (currentView) {
            case "Home":
                return <HomeView />;
            case "Musik":
                return <MusikView />;
        }
    }, [currentView]);

    return (
        <>
            <WindowControls />
            {viewContent}
        </>
    );
};

export default App;
