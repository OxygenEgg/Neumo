import HomeView from "@/views/home";
import Header from "@/components/header";
import "@/App.scss";
import MusikView from "@/views/musik";
import { useViewStore } from "@/store/useViewStore.ts";

const App = () => {
    const currentView = useViewStore((state) => state.currentView);

    return (
        <>
            <Header />
            {currentView === "Home" ? <HomeView /> : null}
            {currentView === "Musik" ? <MusikView /> : null}
        </>
    );
};

export default App;
