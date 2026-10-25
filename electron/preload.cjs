const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isDesktop: true,
  openExternal: (url) => shell.openExternal(url)
});
