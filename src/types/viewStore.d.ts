type View = "Home" | "Musik";

interface ViewStore {
    currentView: View;
    setView: (view: View) => void;
}
