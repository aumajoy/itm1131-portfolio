document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      console.log("Menu toggled! Active classes:", navMenu.className);
    });
  }

  const messageField = document.getElementById("message");
  const charCountDisplay = document.getElementById("char-count");
  const minReqWarning = document.getElementById("minReq");

  if (messageField && charCountDisplay) {
    messageField.addEventListener("input", () => {
      const currentLength = messageField.value.length;

      charCountDisplay.textContent = `${currentLength} character${currentLength === 1 ? "" : "s"}`;

      if (minReqWarning) {
        if (currentLength > 0 && currentLength < 10) {
          minReqWarning.classList.remove("d-none");
          charCountDisplay.classList.add("text-warning");
        } else {
          minReqWarning.classList.add("d-none");
          charCountDisplay.classList.remove("text-warning");
        }
      }

      console.log("Live character count updated:", currentLength);
    });
  }

  const listDiv = document.getElementById('modules-list');
  if (!listDiv) return;

  fetch('modules.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status} - file not found`);
      return res.json();
    })
    .then(modules => {
      let html = '<ul style="list-style:none; padding:0;">';
      modules.forEach(m => {
        html += `<li style="padding:8px; border-bottom:1px solid #ddd;"><strong>${m.name}</strong> - ${m.hours} hours</li>`;
      });
      html += '</ul>';
      listDiv.innerHTML = html;
    })

    .catch(err => {
      listDiv.innerHTML = `<p style="color:red; background:#ffe0e0; padding:10px; border-radius:5px;">⚠️ Failed to load modules: ${err.message}. Check that modules.json exists.</p>`;
      console.error('Fetch failed:', err);
    });
  });
