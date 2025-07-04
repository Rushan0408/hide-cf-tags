(function() {
  // Current hide/show state
  let hide = true;

  // Hide or show the inner tags content of the 'Problem tags' sidebox, keeping the header visible
  function updateVisibility() {
    document.querySelectorAll('div.roundbox.sidebox.borderTopRound').forEach(box => {
      const cap = box.querySelector('div.caption.titled');
      if (cap && /Problem tags/.test(cap.textContent)) {
        // The next sibling after the caption is the content container holding the tags
        const contentDiv = cap.nextElementSibling;
        if (contentDiv) {
          contentDiv.style.display = hide ? 'none' : '';
        }
      }
    });
  }

  // Insert an inline toggle button in the 'Problem tags' caption
  function insertToggleButton() {
    document.querySelectorAll('div.roundbox.sidebox.borderTopRound').forEach(box => {
      const cap = box.querySelector('div.caption.titled');
      if (!cap || !/Problem tags/.test(cap.textContent)) return;
      if (cap.querySelector('.cf-toggle-btn')) return;  // already inserted

      const btn = document.createElement('button');
      btn.className = 'cf-toggle-btn';
      btn.textContent = hide ? 'Show Tags' : 'Hide Tags';
      btn.style.marginLeft = '8px';
      btn.style.padding = '2px 6px';
      btn.style.fontSize = '0.9em';
      btn.style.cursor = 'pointer';

      btn.addEventListener('click', () => {
        hide = !hide;
        chrome.storage.local.set({ hideTags: hide });
        updateVisibility();
        btn.textContent = hide ? 'Show Tags' : 'Hide Tags';
      });

      cap.appendChild(btn);
    });
  }

  // On load: fetch saved state, apply visibility, then inject toggle
  chrome.storage.local.get({ hideTags: true }, data => {
    hide = data.hideTags;
    updateVisibility();
    insertToggleButton();
  });
})();
