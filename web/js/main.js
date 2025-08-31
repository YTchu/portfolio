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


 let pixels = 500;
      let backToTopBtn = document.querySelector(".goToTop-btn");

      const scrollContainer = () => {
        return document.documentElement || document.body;
      };

      document.addEventListener("scroll", () => {
        if (scrollContainer().scrollTop > pixels) {
          backToTopBtn.classList.remove("hidden");
        } else {
          backToTopBtn.classList.add("hidden");
        }
      });

      backToTopBtn.addEventListener("click", () => {
        document.body.scrollIntoView({ behavior: "smooth" });
      });
