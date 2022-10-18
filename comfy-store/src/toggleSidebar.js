import { getElement } from './until.js';

const toggleNav = getElement('.toggle-btn');
const sidebarOverlay = getElement('.sidebar-wrapper');
const closeBtn = getElement('.close-btn');

toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});
