import styles from "./index.module.scss";
import logo from "@/assets/mwWhite.svg";

const WindowControls = () => {
    return (
        <div className={styles.windowControls}>
            <div className={styles.windowControls__LogoContainer}>
                <img className={styles.windowControls__LogoContainer__Logo} src={logo} alt="logo" />
            </div>
            <div className={styles.windowControls__Controls}>
                <button
                    id={"minimizeWindowControl"}
                    className={styles.windowControls__Controls__Button}
                    onClick={() => {
                        window.ipcRenderer.send("window:minimize");
                    }}
                >
                    <span className={styles.windowControls__Controls__Button__Label}>&#xEF2D;</span>
                </button>
                <button
                    id={"maximizeWindowControl"}
                    className={styles.windowControls__Controls__Button}
                    onClick={() => {
                        window.ipcRenderer.send("window:maximize");
                    }}
                >
                    <span className={styles.windowControls__Controls__Button__Label}>&#xEF2E;</span>
                </button>
                <button
                    id={"closeWindowControl"}
                    className={styles.windowControls__Controls__Button}
                    onClick={() => {
                        window.ipcRenderer.send("window:close");
                    }}
                >
                    <span className={styles.windowControls__Controls__Button__Label}>&#xEF2C;</span>
                </button>
            </div>
        </div>
    );
};

export default WindowControls;
