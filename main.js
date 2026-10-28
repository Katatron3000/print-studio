const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 920, minWidth: 1000, minHeight: 640,
    title: "Sweet Print Studio",
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.removeMenu();
  win.loadFile(path.join(__dirname, "index.html"));
  // Ask where to save each export
  win.webContents.session.on("will-download", (e, item) => {
    item.setSaveDialogOptions({ title: "Save export", defaultPath: item.getFilename() });
  });
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
