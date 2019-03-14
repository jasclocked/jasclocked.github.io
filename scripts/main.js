document.querySelector('h1').onclick = function() {
    alert('Wrong spot to click.');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var  mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/4.jpg') {
        myImage.setAttribute ('src', 'images/4s.jpg');
    } else {
        myImage.setAttribute ('src', 'images/4.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('What is your name？');
  localStorage.setItem('Patrick', myName);
  myHeading.textContent = 'Happy birthday, ' + myName;
}

if(!localStorage.getItem('Patrick')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('Patrick');
  myHeading.textContent = 'Happy birthday, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}