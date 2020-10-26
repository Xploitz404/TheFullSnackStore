const menu = document.getElementById('menu__bars');
const sidebar = document.getElementById('sidebar');
const close = document.getElementById('closeBtn');

menu.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = sidebar.classList;
    nav.contains('active') ? nav.remove('active') : nav.add('active');
}