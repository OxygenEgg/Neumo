import { BrowserWindow, ipcMain } from "electron";

let mainWindow: BrowserWindow;

export const initMainWindow = (mainWindowArg) => {
    mainWindow = mainWindowArg;
};
