const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  showcase = document.querySelector('.showcase'),
  showDetails = document.querySelector('.showDetails');

//   showDetails.addEventListener('mouseover', addDet)

//   function addDet(e) {

//   }

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    showcase.style.backgroundImage = "url('img/evening.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    showPix.style.backgroundImage = "url(img/afternoon.jpg)";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    showPix.style.backgroundImage = "url(img/evening.jpg)";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Click to Input your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
// function getFocus() {
//   if (localStorage.getItem('focus') === null) {
//     focus.textContent = '[Enter Focus]';
//   } else {
//     focus.textContent = localStorage.getItem('focus');
//   }
// }

// // Set Focus
// function setFocus(e) {
//   if (e.type === 'keypress') {
//     // Make sure enter is pressed
//     if (e.which == 13 || e.keyCode == 13) {
//       localStorage.setItem('focus', e.target.innerText);
//       focus.blur();
//     }
//   } else {
//     localStorage.setItem('focus', e.target.innerText);
//   }
// }

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

// Run
showTime();
setBgGreet();
getName();