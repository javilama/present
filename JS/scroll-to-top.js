
const doc = document,
win = window;


export default function scrollTopBtn(btn){
  const $scrollBtn = doc.querySelector(btn);  
  win.addEventListener("scroll", () => {
      let scrollTop = win.pageYOffset || doc.documentElement.scrollTop;
           if (scrollTop > 600) {
               $scrollBtn.classList.remove("hidden")
           }else {
               $scrollBtn.classList.add("hidden")
           }

    // console.log(win.pageYOffset, doc.documentElement.scrollTop);
  })
  doc.addEventListener("click", (e) => {
       if(e.target.matches(btn)){
           console.log(btn);
           win.scrollTo({
               behavior: "smooth",
               top: 0,
               //left:0
           })
       }
  })
   
}