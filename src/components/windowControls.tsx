import logo from "@/assets/mwWhite.svg";

const WindowControls = () => {
    return (
        <div className={"window-controls-container"}>
            <img className={"window-controls-logo"} src={logo} alt="logo" />
            <div className={"window-controls"}>
                <button
                    id={"minimizeWindowControl"}
                    className={"window-controls-button"}
                    onClick={() => {
                        window.ipcRenderer.send("window:minimize");
                    }}
                >
                    <span>&#xEF2D;</span>
                </button>
                <button
                    id={"maximizeWindowControl"}
                    className={"window-controls-button"}
                    onClick={() => {
                        window.ipcRenderer.send("window:maximize");
                    }}
                >
                    <span>&#xEF2E;</span>
                </button>
                <button
                    id={"closeWindowControl"}
                    className={"window-controls-button"}
                    onClick={() => {
                        window.ipcRenderer.send("window:close");
                    }}
                >
                    <span>&#xEF2C;</span>
                </button>
            </div>
        </div>
    );
};

export default WindowControls;
