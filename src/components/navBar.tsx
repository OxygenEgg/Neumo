import { useViewStore } from "@/store/useViewStore.ts";

const NavBar = () => {
    return (
        <div className={"navbar-container"}>
            <div className={"navbar-top"}>
                <NavLink viewLink={"Home"}>&#xEA8A;</NavLink>
                <NavLink viewLink={"Musik"}>&#xEC4F;</NavLink>
                <NavLink viewLink={"Hue"}>&#xEA80;</NavLink>
            </div>
            <div className={"navbar-bottom"}>
                <NavLink viewLink={"Settings"}>&#xE713;</NavLink>
            </div>
        </div>
    );
};

const NavLink = ({ children, viewLink }: { children: string; viewLink: View }) => {
    const currentView = useViewStore((state) => state.currentView);
    const setView = useViewStore((state) => state.setView);

    return (
        <button
            className={`navbar-navlink ${currentView === viewLink ? "active" : ""}`}
            onClick={() => setView(viewLink)}
        >
            <span>{children}</span>
        </button>
    );
};

export default NavBar;
