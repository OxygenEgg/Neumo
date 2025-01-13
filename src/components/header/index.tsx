import { useViewStore } from "@/store/useViewStore.ts";

const Header = () => {
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
