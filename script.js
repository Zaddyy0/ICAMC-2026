function changeTab(tabNumber) {
  const buttons = document.getElementsByClassName('tab');
  const contents = document.getElementsByClassName('content');

  for (let i = 0; i < buttons.length; i++) {
    if (i === tabNumber - 1) {
      buttons[i].classList.add('active');
      buttons[i].style.backgroundColor = '#1e3a8a'; // deep blue
      buttons[i].style.color = '#ffffff';
      contents[i].style.display = 'block';
    } else {
      buttons[i].classList.remove('active');
      buttons[i].style.backgroundColor = '#020617'; // near black
      buttons[i].style.color = '#e5e7eb'; // light grey
      contents[i].style.display = 'none';
    }
  }
}

// Function to toggle the dropdown menu
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('.dropdown-menu');
  allDropdowns.forEach((item) => {
    if (item.id !== id) {
      item.classList.add('hidden');
    }
  });
  dropdown.classList.toggle('hidden');
}

// // Open the "Organising Chair" section by default
// const organisingChairDropdown = document.getElementById('patrons_dropdown');
// organisingChairDropdown.classList.remove('hidden');


const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const navMid = document.getElementById('navmid');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('top-20');
  navLinks.classList.toggle('top-[-619px]');

  // Ensure background color is applied on toggle
  if (navLinks.classList.contains('top-20')) {
    navLinks.style.backgroundColor = '#020617'; // dark navy
    navBar.style.backgroundColor = '#020617';
    navLinks.style.zIndex = '10'; // Bring the menu to the front

    // Change padding-bottom for navMid
    navMid.style.paddingBottom = '15px';

  } else {
    navLinks.style.backgroundColor = 'transparent'; // Reset to none when hidden
    navBar.style.backgroundColor = 'transparent';
    navLinks.style.zIndex = '-1'; // Send the menu to the back

    // Reset padding-bottom for navMid
    navMid.style.paddingBottom = '0px';
  }
});

var countDownDate = new Date("May 7, 2026 10:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + " D : " + hours + " H : " +
    minutes + " M : " + seconds + " S";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

}, 1000);
