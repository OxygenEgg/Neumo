import o from "node:path";
import { fileURLToPath as a } from "node:url";
import { app as n, BrowserWindow as s } from "electron";
const t = o.dirname(a(import.meta.url));
process.env.APP_ROOT = o.join(t, "..");
const i = process.env.VITE_DEV_SERVER_URL, m = o.join(process.env.APP_ROOT, "dist-electron"), r = o.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = i ? o.join(process.env.APP_ROOT, "public") : r;
let e;
function l() {
  e = new s({
    icon: o.join(process.env.VITE_PUBLIC, "mwNeumo.ico"),
    title: "Neumo",
    height: 810,
    width: 1440,
    backgroundColor: "#e596c8",
    webPreferences: {
      preload: o.join(t, "preload.mjs")
    }
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), i ? (e.loadURL(i), e.webContents.openDevTools()) : e.loadFile(o.join(r, "index.html")), e.setMenuBarVisibility(!1);
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), e = null);
});
n.on("activate", () => {
  s.getAllWindows().length === 0 && l();
});
n.whenReady().then(l);
export {
  m as MAIN_DIST,
  r as RENDERER_DIST,
  i as VITE_DEV_SERVER_URL
};
