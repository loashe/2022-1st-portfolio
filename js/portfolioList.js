//페이지 이동

const portfolioList = document.querySelector(".portfolioList");

const toDoList = document.querySelector("#listHome a:nth-of-type(1)");
const cafePascucci = document.querySelector("#listHome a:nth-of-type(2)");
const samsung = document.querySelector("#listHome a:nth-of-type(3)");
const BNKbank = document.querySelector("#listHome a:nth-of-type(4)");

function moveToDoList(event){
  event.preventDefault();
  if(document.body.offsetWidth <= 831 && document.body.offsetWidth >= 641){
    portfolioList.style.transform = "translateY(-337.5px)";
  }else if(document.body.offsetWidth <= 641){
    portfolioList.style.transform = "translateY(-450px)";
  }else{
    portfolioList.style.transform = "translateY(-450px)";
  }
}

function movePascucci(event){
  event.preventDefault();
  if(document.body.offsetWidth <= 831 && document.body.offsetWidth >= 641){
    portfolioList.style.transform = "translateY(-675px)";
  }else if(document.body.offsetWidth <= 641){
    portfolioList.style.transform = "translateY(-900px)";
  }else{
    portfolioList.style.transform = "translateY(-900px)";
  }
}

function moveSamsung(event){
  event.preventDefault();
  if(document.body.offsetWidth <= 831 && document.body.offsetWidth >= 641){
    portfolioList.style.transform = "translateY(-1012.5px)";
  }else if(document.body.offsetWidth <= 641){
    portfolioList.style.transform = "translateY(-1350px)";
  }else{
    portfolioList.style.transform = "translateY(-1350px)";
  }
}

function moveBNKbank(event){
  event.preventDefault();
  if(document.body.offsetWidth <= 831 && document.body.offsetWidth >= 641){
    portfolioList.style.transform = "translateY(-1348px)";
  }else if(document.body.offsetWidth <= 641){
    portfolioList.style.transform = "translateY(-1800px)";
  }else{
    portfolioList.style.transform = "translateY(-1800px)";
  }
}

toDoList.addEventListener("click", moveToDoList);
cafePascucci.addEventListener("click", movePascucci);
samsung.addEventListener("click", moveSamsung);
BNKbank.addEventListener("click", moveBNKbank);


//미리보기

const preview = document.querySelector(".img-preview");

function toDoImg(){
  preview.style.backgroundImage = "url(../img/momentum_pixel.png)";
}
function pascucciImg(){
  preview.style.backgroundImage = "url(../img/pascucci_pixel.png)";
}
function samsungImg(){
  preview.style.backgroundImage = "url(../img/samsung_pixel.png)";
}
function BNKbankImg(){
  preview.style.backgroundImage = "url(../img/BNKbank_pixel.png)";
}

toDoList.addEventListener("mouseover", toDoImg);
cafePascucci.addEventListener("mouseover", pascucciImg);
samsung.addEventListener("mouseover", samsungImg);
BNKbank.addEventListener("mouseover", BNKbankImg);

//홈으로 돌아가기

const homeAnchor1 = document.querySelector("#portfolio .portfolioList li:nth-of-type(2) .home-anchor");
const homeAnchor2 = document.querySelector("#portfolio .portfolioList li:nth-of-type(3) .home-anchor");
const homeAnchor3 = document.querySelector("#portfolio .portfolioList li:nth-of-type(4) .home-anchor");
const homeAnchor4 = document.querySelector("#portfolio .portfolioList li:nth-of-type(5) .home-anchor");

function moveHome(event){
  event.preventDefault();
  portfolioList.style.transform = "translateY(0px)";
}

homeAnchor1.addEventListener("click", moveHome);
homeAnchor2.addEventListener("click", moveHome);
homeAnchor3.addEventListener("click", moveHome);
homeAnchor4.addEventListener("click", moveHome);