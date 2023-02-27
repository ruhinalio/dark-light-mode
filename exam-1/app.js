const toggleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});