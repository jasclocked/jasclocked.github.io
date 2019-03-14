document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var  mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hp_image.jpg') {
        myImage.setAttribute ('src', 'images/hp_image2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/hp_image.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
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