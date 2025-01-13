import React from "react";
import { useViewStore } from "@/store/useViewStore.ts";

const Header = () => {
    const currentView = useViewStore((state) => state.currentView);
    const setView = useViewStore((state) => state.setView);

    return (
        <header>
            <div>
                <button onClick={() => setView("Home")}>Home</button>
                <button onClick={() => setView("Musik")}>Musik</button>
            </div>
        </header>
    );
};

export default Header;
