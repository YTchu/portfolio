let myId = document.getElementById("myId");
let intro = document.getElementById("intro");
let mask = document.getElementById("mask");
let scroll_hidden = document.getElementById("scroll_hidden");



//側邊抽屜
myId.addEventListener("click", open);
intro.addEventListener("click", open);
mask.addEventListener("click", open);

function open(){
  intro.classList.toggle("js_switch");
  mask.classList.toggle("js_switch");
  scroll_hidden.classList.toggle("js_switch");
}

