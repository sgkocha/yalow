/**
 * Created by Сурен on 16.08.2017.
 */
var sliderTitle = document.querySelector(".slider-text__title");
var sliderSubtitle = document.querySelector(".slider-text__subtitle");

var i = 0;

var messages = document.querySelector(".messages");
var twitterBtn = document.querySelector(".twitter-btn");
var twitterMsg = document.querySelector(".twitter-msg");
var oldMsg = document.querySelectorAll(".old-msg");
var j = 0;

twitterBtn.onclick = function () {
   if (twitterMsg.value === "") return;
   if(j === oldMsg.length) {
       for(var i = 0; i < oldMsg.length; i++ ){
           oldMsg[i].style.display = "none";
       }
       j=0;
   }
   oldMsg[j].innerHTML= twitterMsg.value;
   oldMsg[j].style.display = "block";
   if (j == 0) messages.style.top = "-113px";  
   if (j == 1) messages.style.top = "-175px";
   if (j == 2) messages.style.top = "-230px";  
   j++;
};

var sliderRange = document.querySelector(".slider-range");
var sliderSpan = document.querySelector(".slider-span");
var middleText = document.querySelector(".middle-wr-text");
var middleAnimation = document.querySelector(".middle-wr-animation");
var middleSocial = document.querySelector(".middle-wr-social");
var step = 0;

function changePosition() {
    if (step === 3) step = 1;
    switch (step) {
        case 1:
            middleText.style.order = 2;
            middleAnimation.style.order = 3;
            middleSocial.style.marginLeft = "0";
            middleSocial.style.marginRight = "30px";
            middleSocial.style.order = 1;
            break;
        case 2:
            middleSocial.style.order = 3;
            middleSocial.style.marginLeft = "30px";
            middleSocial.style.marginRight = "0";
            middleText.style.order = 1;
            middleAnimation.style.order = 2;
            break;
    }
}

sliderRange.onclick = function (event) {
    var computedStyle = getComputedStyle(sliderSpan);
    var computedStyle2 = getComputedStyle(sliderRange);
    var pos = computedStyle.left.substring(0, computedStyle.left.length - 2);
    var w = computedStyle2.width.substring(0, computedStyle2.width.length - 2);
    step++;
    if (parseFloat(pos) >= parseFloat(w) - 220) {
        sliderSpan.style.left = "0";
        return;
    }
    pos = parseFloat(pos) + 50 + "px";

    sliderSpan.style.left = pos;

    changePosition();
};