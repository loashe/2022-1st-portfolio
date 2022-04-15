const news = document.querySelector("#boardNews");
const events = document.querySelector("#boardEvent");
const recruit = document.querySelector("#boardRecruit");

const newsTitle = document.querySelector("#boardNews ~ label");
const eventTitle = document.querySelector("#boardEvent ~ label");
const recruitTitle = document.querySelector("#boardRecruit ~ label");

const newsList = document.querySelector("#boardNewsList");
const eventList = document.querySelector("#boardEventList");
const recruitList = document.querySelector("#boardRecruitList");

function newsPrint(){
  if(news.checked == true){
    eventList.style.display = "none";
    recruitList.style.display = "none";
    newsList.style.display = "flex";
    eventTitle.style.color = "black";
    recruitTitle.style.color = "black";
    newsTitle.style.color = "#db2f36";
  }
}
function eventPrint(){
  if(events.checked == true){
    recruitList.style.display = "none";
    newsList.style.display = "none";
    eventList.style.display = "flex";
    recruitTitle.style.color = "black";
    newsTitle.style.color = "black";
    eventTitle.style.color = "#db2f36";
  }
}
function recruitPrint(){
  if(recruit.checked == true){
    newsList.style.display = "none";
    eventList.style.display = "none";
    recruitList.style.display = "flex";
    newsTitle.style.color = "black";
    eventTitle.style.color = "black";
    recruitTitle.style.color = "#db2f36";
  }
}


news.addEventListener("click",newsPrint);
events.addEventListener("click",eventPrint);
recruit.addEventListener("click",recruitPrint);
newsPrint();