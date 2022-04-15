const naviCheckbox = document.querySelector("#hamburgerButton");
const naviButton = document.querySelector("#hamburgerButton ~ label");
const navi = document.querySelector("#navi");

function naviControl() {
  if (naviCheckbox.checked == true) {
    navi.style.height = "300px";
    naviButton.classList.add("active");
  } else {
    navi.style.height = "50px";
    naviButton.classList.remove("active");
  }
}

function naviResizeLong(){
  if(document.body.offsetWidth >= 1078){
    navi.style.height = "280px";
  }
}
function naviResizeShort(){
  if(document.body.offsetWidth >= 1078){
    navi.style.height = "80px";
  }
}

function windowResize() {
  if (document.body.offsetWidth >= 770) {
    navi.style.height = "80px";
  }else{
    navi.style.height = "50px";
  }
}

naviButton.addEventListener("click", naviControl);
window.addEventListener("resize",windowResize);
navi.addEventListener("mouseover", naviResizeLong);
navi.addEventListener("mouseout", naviResizeShort);
windowResize();
