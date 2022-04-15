const banner = document.querySelector("#mainBanner .container .bannerList");

const nextButton = document.querySelector(".bannerControl:last-of-type");
const prevButton = document.querySelector(".bannerControl:first-of-type");

let counter = 0;

function bannerNext(){
  if(counter !== 2){
    counter = counter + 1;
    banner.style.transform = `translateX(-${(100 / 3) * counter}%)`;
  }else{
    counter = 0;
    banner.style.transform = `translateX(0px)`;
  }
}

function bannerPrev(){
  if(counter !== 0){
    counter = counter - 1;
    banner.style.transform = `translateX(-${(100 / 3) * counter}%)`;
  }else{
    counter = 2;
    banner.style.transform = `translateX(-${(100 / 3) * counter}%)`;
  }
}

nextButton.addEventListener("click",bannerNext);
prevButton.addEventListener("click",bannerPrev);
setInterval(bannerNext,4000);