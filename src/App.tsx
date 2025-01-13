import HomeView from "@/views/home";
import Header from "@/components/header";
import "@/App.scss";
import MusikView from "@/views/musik";
import { useViewStore } from "@/store/useViewStore.ts";
import { useMemo } from "react";

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
            <Header />
            {viewContent}
        </>
    );
};

export default App;
