const ham=document.querySelector(".line");
const tog=document.querySelector(".toggle");
const log=document.querySelector(".log")
let func=()=>{
        tog.style.transform="translate(0px)";      
}
let lo=()=>{
    tog.style.transform="translate(465px)";      
}

ham.addEventListener("click",func)
log.addEventListener("click",lo);
const m=document.querySelector(".main");
const mode=document.querySelector(".mode");
const darkMode=()=>{
    if (m.className == "main") {
        m.className = "maindark";
      } else {
        m.className = "main";
      }
}
mode.addEventListener("click",darkMode)