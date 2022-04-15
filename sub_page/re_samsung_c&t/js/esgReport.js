const esgReportPage = document.querySelector("#esgReportList");

const nextButton = document.querySelector("#esgReportList li:first-of-type .pageMove");
const prevButton = document.querySelector("#esgReportList li:last-of-type .pageMove");

function esgReportPageMoveNext(){
  esgReportPage.style.transform = "translateX(-50%)";
}

function esgReportPageMovePrev(){
  esgReportPage.style.transform = "translateX(0)";
}

nextButton.addEventListener("click", esgReportPageMoveNext);
prevButton.addEventListener("click", esgReportPageMovePrev);