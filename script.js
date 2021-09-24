function toggleCaption(el) {
  if(document.getElementById(el).style.display == "none") {
    document.getElementById(el).style.display = "block";
  }
  else {
    document.getElementById(el).style.display = "none";
  }
}

function ridOnScroll(el, sUno, sDos) {
  if(document.getElementById(el).style.display == "block") {
    if(sDos == "") {
      if(document.getElementById(sUno).getBoundingClientRect().bottom > document.getElementById(el).getBoundingClientRect().top) {
        document.getElementById(el).style.display = "none";
      }
    }
    else {
      if(document.getElementById(sUno).getBoundingClientRect().bottom > document.getElementById(el).getBoundingClientRect().top
        || document.getElementById(sDos).getBoundingClientRect().top < document.getElementById(el).getBoundingClientRect().bottom) {
          document.getElementById(el).style.display = "none";
        }
    }
  }
}


document.addEventListener("scroll", function() {ridOnScroll("i1c1", "section1", "section2")});
document.addEventListener("scroll", function() {ridOnScroll("i1c2", "section1", "section2")});
document.addEventListener("scroll", function() {ridOnScroll("i2c1", "section2", "section3")});
document.addEventListener("scroll", function() {ridOnScroll("i2c2", "section2", "section3")});
document.addEventListener("scroll", function() {ridOnScroll("i3c1", "section3", "section4")});
document.addEventListener("scroll", function() {ridOnScroll("i3c2", "section3", "section4")});
document.addEventListener("scroll", function() {ridOnScroll("i4c1", "section4", "section5")});
document.addEventListener("scroll", function() {ridOnScroll("i4c2", "section4", "section5")});
document.addEventListener("scroll", function() {ridOnScroll("i4c3", "section4", "section5")});
document.addEventListener("scroll", function() {ridOnScroll("i5c1", "section5", "section6")});
document.addEventListener("scroll", function() {ridOnScroll("i6c1", "section6", "")});
document.addEventListener("scroll", function() {ridOnScroll("i6c2", "section6", "")});
document.addEventListener("scroll", () => {
  //first image button1 event scroller toggle
  if(document.getElementById("section1").getBoundingClientRect().bottom < 0.5 * window.innerHeight && 
     document.getElementById("section2").getBoundingClientRect().top > 0.5 * window.innerHeight + 15) {
    document.getElementById("sOne2").style.display = "block";
  }
  else {
    document.getElementById("sOne2").style.display = "none";
  }
  //first image button two event scroller toggle
  if(document.getElementById("section1").getBoundingClientRect().bottom < 0.55 * window.innerHeight &&
     document.getElementById("section2").getBoundingClientRect().top > 0.55 * window.innerHeight + 15) {
    document.getElementById("sOne3").style.display = "block";
     }
  else {
    document.getElementById("sOne3").style.display = "none";
  }
  //second image button one event scroller toggle
  if(document.getElementById("section2").getBoundingClientRect().bottom < 0.55 * window.innerHeight &&
     document.getElementById("section3").getBoundingClientRect().top > 0.55 * window.innerHeight + 15) {
    document.getElementById("sTwo2").style.display = "block";
  }
  else {
    document.getElementById("sTwo2").style.display = "none";
  }
  //second image button two event scroller toggle
  if(document.getElementById("section2").getBoundingClientRect().bottom < 0.37 * window.innerHeight &&
     document.getElementById("section3").getBoundingClientRect().top > 0.37 * window.innerHeight + 15) {
    document.getElementById("sTwo3").style.display = "block";
  }
  else {
    document.getElementById("sTwo3").style.display = "none";
  }
  //third image button 1 event scroller toggle
  if(document.getElementById("section3").getBoundingClientRect().bottom < 0.52 * window.innerHeight &&
     document.getElementById("section4").getBoundingClientRect().top > 0.52 * window.innerHeight + 15) {
       document.getElementById("sThree2").style.display = "block";
  }
  else {
    document.getElementById("sThree2").style.display = "none";
  }
  //third image button 2 event scroller toggle
  if(document.getElementById("section3").getBoundingClientRect().bottom < 0.56 * window.innerHeight &&
     document.getElementById("section4").getBoundingClientRect().top > 0.56 * window.innerHeight + 15) {
    document.getElementById("sThree3").style.display = "block";
  }
  else {
    document.getElementById("sThree3").style.display = "none";
  }
  //fourth image button one event scroller toggle
  if(document.getElementById("section4").getBoundingClientRect().bottom < 0.37 * window.innerHeight &&
     document.getElementById("section5").getBoundingClientRect().top > 0.37 * window.innerHeight + 15) {
    document.getElementById("sFour2").style.display = "block";
  }
  else {
    document.getElementById("sFour2").style.display = "none";
  }
  //fourth image button two event scroller toggle
  if(document.getElementById("section4").getBoundingClientRect().bottom < 0.5 * window.innerHeight &&
     document.getElementById("section5").getBoundingClientRect().top > 0.5 * window.innerHeight + 15) {
    document.getElementById("sFour3").style.display = "block";
  }
  else {
    document.getElementById("sFour3").style.display = "none";
  }
  //fourth image button three event scroller toggle
  if(document.getElementById("section4").getBoundingClientRect().bottom < 0.545 * window.innerHeight &&
     document.getElementById("section5").getBoundingClientRect().top > 0.545 * window.innerHeight + 15) {
    document.getElementById("sFour4").style.display = "block";
  }
  else {
    document.getElementById("sFour4").style.display = "none";
  }

  //five image button one event scroller toggle
  if(document.getElementById("section5").getBoundingClientRect().bottom < 0.41 * window.innerHeight &&
     document.getElementById("section6").getBoundingClientRect().top > 0.41 * window.innerHeight + 15) {
    document.getElementById("sFive2").style.display = "block";
  }
  else {
    document.getElementById("sFive2").style.display = "none";
  }
  //sixth image button one event scroller toggle
  if(document.getElementById("section6").getBoundingClientRect().bottom < 0.46 * window.innerHeight) {
    document.getElementById("sSix2").style.display = "block";
  }
  else {
    document.getElementById("sSix2").style.display = "none";
  }
  //sixth image button 2 event scroller toggle
  if(document.getElementById("section6").getBoundingClientRect().bottom < 0.5 * window.innerHeight) {
    document.getElementById("sSix3").style.display = "block";
  }
  else {
    document.getElementById("sSix3").style.display = "none";
  }
  
  // console.log("nonempty", "rect1 is: ", document.getElementById("section1").getBoundingClientRect().bottom, 
  // "rect 2 is: ", document.getElementById("section2").getBoundingClientRect().top);
  //console.log("empty", "rect1 is: ", document.getElementById("section1").getBoundingClientRect().bottom,
  //"rect 2 is: ", document.getElementById("section2").getBoundingClientRect().top); 

  
});

//first image toggle achilles
document.getElementById("sOne2").addEventListener("mouseenter", () => {
   document.getElementById("parallax1").style.backgroundImage = "url(imgs/slideOne2.PNG)";
});
document.getElementById("sOne2").addEventListener("mouseleave", () => {
   document.getElementById("parallax1").style.backgroundImage = "url(imgs/slideOne1.PNG)";
});
document.getElementById("sOne2").addEventListener("click", function() {toggleCaption("i1c1")});

//first image toggle thetis
document.getElementById("sOne3").addEventListener("mouseenter", () => {
   document.getElementById("parallax1").style.backgroundImage = "url(imgs/slideOne3.PNG)";
});
document.getElementById("sOne3").addEventListener("mouseleave", () => {
   document.getElementById("parallax1").style.backgroundImage = "url(imgs/slideOne1.PNG)";
});
document.getElementById("sOne3").addEventListener("click", function() {toggleCaption("i1c2")});

//second image toggle achilles
document.getElementById("sTwo2").addEventListener("mouseenter", () => {
   document.getElementById("parallax2").style.backgroundImage = "url(imgs/slideTwo2.PNG)";
});
document.getElementById("sTwo2").addEventListener("mouseleave", () => {
  document.getElementById("parallax2").style.backgroundImage = "url(imgs/slideTwo1.PNG)";
});
document.getElementById("sTwo2").addEventListener("click", function() {toggleCaption("i2c1")});

//second image toggle patroclus
document.getElementById("sTwo3").addEventListener("mouseenter", () => {
   document.getElementById("parallax2").style.backgroundImage = "url(imgs/slideTwo3.PNG)";
});
document.getElementById("sTwo3").addEventListener("mouseleave", () => {
  document.getElementById("parallax2").style.backgroundImage = "url(imgs/slideTwo1.PNG)";
});
document.getElementById("sTwo3").addEventListener("click", function() {toggleCaption("i2c2")});

//third image toggle achilles
document.getElementById("sThree2").addEventListener("mouseenter", () => {
   document.getElementById("parallax3").style.backgroundImage = "url(imgs/slideThree2.PNG)";
});
document.getElementById("sThree2").addEventListener("mouseleave", () => {
  document.getElementById("parallax3").style.backgroundImage = "url(imgs/slideThree1.PNG)";
});
document.getElementById("sThree2").addEventListener("click", function() {toggleCaption("i3c1")});

//third image toggle chiron
document.getElementById("sThree3").addEventListener("mouseenter", () => {
   document.getElementById("parallax3").style.backgroundImage = "url(imgs/slideThree3.PNG)";
});
document.getElementById("sThree3").addEventListener("mouseleave", () => {
  document.getElementById("parallax3").style.backgroundImage = "url(imgs/slideThree1.PNG)";
});
document.getElementById("sThree3").addEventListener("click", function() {toggleCaption("i3c2")});


//fourth image toggle achilles
document.getElementById("sFour2").addEventListener("mouseenter", () => {
   document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour2.PNG)";
});
document.getElementById("sFour2").addEventListener("mouseleave", () => {
  document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour1.PNG)";
});
document.getElementById("sFour2").addEventListener("click", function() {toggleCaption("i4c1")});

//fourth image toggle briseis
document.getElementById("sFour3").addEventListener("mouseenter", () => {
   document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour3.PNG)";
});
document.getElementById("sFour3").addEventListener("mouseleave", () => {
  document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour1.PNG)";
});
document.getElementById("sFour3").addEventListener("click", function() {toggleCaption("i4c2")});

//fourth image toggle neoptolemus
document.getElementById("sFour4").addEventListener("mouseenter", () => {
   document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour4.PNG)";
});
document.getElementById("sFour4").addEventListener("mouseleave", () => {
  document.getElementById("parallax4").style.backgroundImage = "url(imgs/slideFour1.PNG)";
});
document.getElementById("sFour4").addEventListener("click", function() {toggleCaption("i4c3")});

//fifth image toggle achilles
document.getElementById("sFive2").addEventListener("mouseenter", () => {
   document.getElementById("parallax5").style.backgroundImage = "url(imgs/slideFive2.PNG)";
});
document.getElementById("sFive2").addEventListener("mouseleave", () => {
  document.getElementById("parallax5").style.backgroundImage = "url(imgs/slideFive1.PNG)";
});
document.getElementById("sFive2").addEventListener("click", function() {toggleCaption("i5c1")});


//sixth image toggle achilles death
document.getElementById("sSix2").addEventListener("mouseenter", () => {
   document.getElementById("parallax6").style.backgroundImage = "url(imgs/slideSix2.PNG)";
});
document.getElementById("sSix2").addEventListener("mouseleave", () => {
  document.getElementById("parallax6").style.backgroundImage = "url(imgs/slideSix1.PNG)";
});
document.getElementById("sSix2").addEventListener("click", function() {toggleCaption("i6c1")});

//sixth image toggle patroclus death
document.getElementById("sSix3").addEventListener("mouseenter", () => {
   document.getElementById("parallax6").style.backgroundImage = "url(imgs/slideSix3.PNG)";
});
document.getElementById("sSix3").addEventListener("mouseleave", () => {
  document.getElementById("parallax6").style.backgroundImage = "url(imgs/slideSix1.PNG)";
});
document.getElementById("sSix3").addEventListener("click", function() {toggleCaption("i6c2")});

//navbar
window.onscroll = function() {sticky()};
var navbar = document.getElementById("navbar");
function sticky() {
    navbar.classList.add("sticky");
}


