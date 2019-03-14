var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem{'Patrick', myName};
    myHeading.textContent = 'Happy 20th Birthday, ' + myName;
}

if(!localStorage.getItem('Patrick')) {
    setUserName();
} else {
    var storedName = localStorage,getItem('Patrick');
    myHeading.textContent = 'Happy 20th Birthday, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}