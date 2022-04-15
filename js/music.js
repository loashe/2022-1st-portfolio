const music = document.querySelector("#music audio");
const yesButton = document.querySelector("#music button:first-of-type");
const noButton = document.querySelector("#music button:last-of-type");

const clickSound = document.querySelector("#clickSound");

const catSound = document.querySelector("#catSound");
const cat = document.querySelector(".githubCat img")

function musicPlay(){
  music.volume = 0.4;
  music.play();
}

function musicStop(){
  music.pause();
}

function clickSoundPlay(){
  clickSound.play();
}

function meow(){
  catSound.volume = 0.1;
  catSound.play();
}

yesButton.addEventListener("click", musicPlay);
noButton.addEventListener("click",musicStop);
document.addEventListener("click", clickSoundPlay);
cat.addEventListener("mouseover", meow);