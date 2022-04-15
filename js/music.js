const clickSound = document.querySelector("#clickSound");

const catSound = document.querySelector("#catSound");
const cat = document.querySelector(".githubCat img")

function clickSoundPlay(){
  clickSound.play();
}

function meow(){
  catSound.volume = 0.1;
  catSound.play();
}

document.addEventListener("click", clickSoundPlay);
cat.addEventListener("mouseover", meow);