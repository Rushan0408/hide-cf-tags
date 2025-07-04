// Sync the checkbox to 'hideTags' setting and send toggle messages
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('toggle');
  chrome.storage.local.get({ hideTags: true }, data => {
    checkbox.checked = data.hideTags;
  });
  checkbox.addEventListener('change', () => {
    const hide = checkbox.checked;
    chrome.storage.local.set({ hideTags: hide });
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleTags', hide });
    });
  });
});