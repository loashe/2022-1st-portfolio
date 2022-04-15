const bannerContainer = document.querySelector("#main_banner_list");
const bannerVideo =  document.querySelector(".main_banner video");

const bannerNextButton = document.querySelector(".bannerNext");
const bannerPrevButton = document.querySelector(".bannerPrev");

let counter = 0;

function bannerNext(){
  if(counter < 3){
    counter = counter + 1;
    bannerContainer.style.transform = `translateX(-${counter * 100}vw)`;
  }else{
    counter = 0;
    bannerContainer.style.transform = `translateX(0vw)`;
  }
}
function bannerPrev(){
  if(counter == 0){
    counter = counter + 3;
    bannerContainer.style.transform = `translateX(-300vw)`;
  }else{
    counter = counter - 1;
    bannerContainer.style.transform = `translateX(-${counter * 100}vw)`;
  }
}

bannerNextButton.addEventListener("click",bannerNext);
bannerPrevButton.addEventListener("click",bannerPrev);

const autorolling = setInterval(bannerNext, 10000);