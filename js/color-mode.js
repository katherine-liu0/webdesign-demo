/* Toggle Color Mode */

let icon = document.getElementById('color-mode-icon');
let background = document.querySelector('body');
// access specific links on the page
let headerLink = document.querySelector('header > h1 > a');
let navLinks = document.querySelectorAll('nav > a');
let footerLink = document.querySelector('footer > p > a');

function darkMode() {
  // change styles to dark mode with class
  background.classList.add('dark');
  icon.classList.add('dark');
  headerLink.classList.add('dark');
  navLinks[0].classList.add('dark');
  navLinks[1].classList.add('dark');
  navLinks[2].classList.add('dark');
  navLinks[3].classList.add('dark');
  footerLink.classList.add('dark');
}

function lightMode() {
  background.classList.remove('dark');
  icon.classList.remove('dark');
  headerLink.classList.remove('dark');
  navLinks[0].classList.remove('dark');
  navLinks[1].classList.remove('dark');
  navLinks[2].classList.remove('dark');
  navLinks[3].classList.remove('dark');
  footerLink.classList.remove('dark');
}

// let colorMode = 'light';

// check if the user has set a preferred color scheme
if (sessionStorage.colorMode) {
  if (sessionStorage.colorMode === 'dark') {
    darkMode();
  } else {
    lightMode();
  }
} else { // 
  sessionStorage.setItem('colorMode', 'light');
}

// toggle between color modes
function toggleColorMode() {
  if (sessionStorage.colorMode === 'dark') {
    lightMode();
    sessionStorage.colorMode = 'light';
  } else {
    darkMode();
    sessionStorage.colorMode = 'dark';
  }
}

icon.addEventListener('click', toggleColorMode);