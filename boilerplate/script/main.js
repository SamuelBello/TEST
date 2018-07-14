var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

// function multiply(num1,num2) {
//     var result = num1 * num2;
//     alert (result);    
//     return result;
//   }

//   multiply(4,7);
// multiply(20,20);
// multiply(0.5,3);

// document.querySelector('body').onscroll = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fruit.jpg') {
      myImage.setAttribute ('src','images/mozilla.png');
    } else {
      myImage.setAttribute ('src','images/fruit.jpg');     
    }
}