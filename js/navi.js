const navi = document.querySelector("#navi");

function naviPrint(){
  if(window.scrollY != 0){
    navi.style.backgroundImage = "url(../img/intro_background_pixle.png)";
    navi.style.borderBottom = "3px solid white";
  }else{
    navi.style.background = "none";
    navi.style.borderBottom = "none";
  }
}


window.addEventListener("scroll",naviPrint);
window.addEventListener("keydown",naviPrint);