document.addEventListener("DOMContentLoaded", () => {
  
  
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");


  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {

      navMenu.classList.toggle('open');
    });
  }


const messageField = document.getElementById('message');
const charCountDisplay = document.getElementById('char-count');
const minReqWarning = document.getElementById('minReq');

if (messageField && charCountDisplay) {
  messageField.addEventListener('input', (event) => {
    const currentLength =  messageField.value.length;

    charCountDisplay.textContent = `${currentLength} character${currentLength === 1 ? '' : 's'} typed`;

            
            if (currentLength > 0 && currentLength < 10) {
                minReqWarning.classList.remove('d-none');
                charCountDisplay.classList.add('text-warning');
            } else {
                minReqWarning.classList.add('d-none');
                charCountDisplay.classList.remove('text-warning');
            }

          });
        }

        const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
});
