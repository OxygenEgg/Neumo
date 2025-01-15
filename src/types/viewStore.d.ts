type View = "Home" | "Musik" | "Hue" | "Settings";

interface ViewStore {
    currentView: View;
    setView: (view: View) => void;
}
