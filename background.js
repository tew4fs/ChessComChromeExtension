let user = 'tew4fs';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ user });
  console.log(`Default user set to ${user}`);
});