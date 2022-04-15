const baseListContainer = document.querySelector("#base");

const world = document.querySelector("#country li:nth-of-type(1) a");
const europe = document.querySelector("#country li:nth-of-type(2) a");
const africa = document.querySelector("#country li:nth-of-type(3) a");
const asia = document.querySelector("#country li:nth-of-type(4) a");
const america = document.querySelector("#country li:nth-of-type(5) a");

function selectWorld (){
  baseListContainer.style.transform = "translateX(0%)";
}
world.addEventListener("click", selectWorld);

function selectEurope(){
  baseListContainer.style.transform = "translateX(-20%)";
}
europe.addEventListener("click", selectEurope);

function selectAfrica(){
  baseListContainer.style.transform = "translateX(-40%)";
}
africa.addEventListener("click", selectAfrica);

function selectAsia(){
  baseListContainer.style.transform = "translateX(-60%)";
}
asia.addEventListener("click", selectAsia);

function selectAmerica(){
  baseListContainer.style.transform = "translateX(-80%)";
}
america.addEventListener("click", selectAmerica);