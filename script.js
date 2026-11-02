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
});
