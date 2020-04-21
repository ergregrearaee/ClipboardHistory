global.win = null;
global.title = "Clipboard Manager Electron";

const { app, dialog, globalShortcut } = require("electron");
const createWindow = require("./lib/create_window");
require("electron-reload")(__dirname);

require("./lib/events")();

app.allowRendererProcessReuse = false;

app.on("second-instance", () => {
  dialog.showMessageBox({
    type: "info",
    title,
    message: "An instance of " + title + " already open",
    buttons: ["Ok"],
  });
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
