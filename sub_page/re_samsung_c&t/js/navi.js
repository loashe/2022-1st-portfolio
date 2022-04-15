const navi = document.querySelectorAll(".side_bar_link a");
const naviMenu = document.querySelectorAll(".side_bar_link a span");

//black
const page2nd = document.querySelector("#page_2nd");
const page3rd = document.querySelector("#page_3rd");
const pageLast = document.querySelector("#page_last");
//white
const page1st = document.querySelector("#page_1st");
const page4th = document.querySelector("#page_4th");
const page5th = document.querySelector("#page_5th");
const page6th = document.querySelector("#page_6th");

function naviChangeBlack(){
  navi[0].style.backgroundColor = "#000000";
  navi[1].style.backgroundColor = "#000000";
  navi[2].style.backgroundColor = "#000000";
  navi[3].style.backgroundColor = "#000000";
  navi[4].style.backgroundColor = "#000000";
  navi[5].style.backgroundColor = "#000000";
  navi[6].style.backgroundColor = "#000000";
  naviMenu[0].style.color = "#ffffff";
  naviMenu[1].style.color = "#ffffff";
  naviMenu[2].style.color = "#ffffff";
  naviMenu[3].style.color = "#ffffff";
  naviMenu[4].style.color = "#ffffff";
  naviMenu[5].style.color = "#ffffff";
  naviMenu[6].style.color = "#ffffff";
}
page2nd.addEventListener("mouseenter",naviChangeBlack);
page3rd.addEventListener("mouseenter",naviChangeBlack);
pageLast.addEventListener("mouseenter",naviChangeBlack);


function naviChangeWhite(){
  navi[0].style.backgroundColor = "#ffffff";
  navi[1].style.backgroundColor = "#ffffff";
  navi[2].style.backgroundColor = "#ffffff";
  navi[3].style.backgroundColor = "#ffffff";
  navi[4].style.backgroundColor = "#ffffff";
  navi[5].style.backgroundColor = "#ffffff";
  navi[6].style.backgroundColor = "#ffffff";
  naviMenu[0].style.color = "#000000";
  naviMenu[1].style.color = "#000000";
  naviMenu[2].style.color = "#000000";
  naviMenu[3].style.color = "#000000";
  naviMenu[4].style.color = "#000000";
  naviMenu[5].style.color = "#000000";
  naviMenu[6].style.color = "#000000";
}
page1st.addEventListener("mouseenter",naviChangeWhite);
page4th.addEventListener("mouseenter",naviChangeWhite);
page5th.addEventListener("mouseenter",naviChangeWhite);
page6th.addEventListener("mouseenter",naviChangeWhite);