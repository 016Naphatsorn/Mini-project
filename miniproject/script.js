

let scrollAmount1 = 0;
const slider1 = document.querySelector(".future-header ul");

function slideRight1(){
  scrollAmount1 += 400;
  slider1.style.transform = `translateX(-${scrollAmount1}px)`;
}

function slideLeft1(){
  scrollAmount1 -= 400;
  if(scrollAmount1 < 0){
    scrollAmount1 = 0;
  }
  slider1.style.transform = `translateX(-${scrollAmount1}px)`;
}

/*--------------------------------------------------------------*/ 

let scrollAmount2 = 0;
const slider2 = document.querySelector(".trending-header ul");

function slideRight2(){
  scrollAmount2 += 400;
  slider2.style.transform = `translateX(-${scrollAmount2}px)`;
}

function slideLeft2(){
  scrollAmount2 -= 400;
  if(scrollAmount2 < 0){
    scrollAmount2 = 0;
  }
  slider2.style.transform = `translateX(-${scrollAmount2}px)`;
}