const effectInput = document.querySelector("#effectOff");
const effectLabel = document.querySelector(".effectOff-label");

function effectChange(){
  effectLabel.innerText = "이펙트 켜기";
  setTimeout(() =>{
    if(effectInput.checked == true){
    effectLabel.innerText = "이펙트 켜기";
  } else{
    effectLabel.innerText = "이펙트 끄기";
  }
  }, 1);
}

effectLabel.addEventListener("click", effectChange);