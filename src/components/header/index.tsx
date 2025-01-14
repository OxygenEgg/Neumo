import { useViewStore } from "@/store/useViewStore";
import mwWhite from "@/assets/mwWhite.svg";
import styles from "./index.module.scss";
import WindowControls from "src/components/windowControls";

const Header = () => {
    const currentView = useViewStore((state) => state.currentView);
    const setView = useViewStore((state) => state.setView);

    return (
        <header>
            <div className={styles.header__navLinks}>
                <div className={styles.header__navLinks__Link}>
                    <button className={currentView === "Home" ? styles.active : ""} onClick={() => setView("Home")}>
                        <span>Home</span>
                    </button>
                </div>
                <div className={styles.header__navLinks__LinkWrapper}>
                    <button
                        className={`
                                ${currentView === "Musik" ? styles.active : ""}
                                ${styles.header__navLinks__Link__Button}
                            `}
                        onClick={() => setView("Musik")}
                    >
                        <span>Musik</span>
                    </button>
                </div>
            </div>
            <div className={styles.header__WindowControls}>
                <WindowControls />
            </div>
        </header>
    );
};

export default Header;
