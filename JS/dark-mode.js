const doc = document,
  local= localStorage;


  export default function darkMode(btn,classDark,mode) {
      const $themeBtn = doc.querySelector(btn),
            $selectors = doc.querySelectorAll("[data-dark]");
        //  console.log($selectors);
        //  console.log($themeBtn);
        let moon = "fa-moon",
            sun = "fa-sun",
            flag = true;

       const light = () => {
         $selectors.forEach((el) => el.classList.remove(classDark))
         $themeBtn.classList.remove(sun);
         $themeBtn.classList.add(moon);
         local.setItem("theme","light");
       }

       const dark = () => {
         $selectors.forEach((el) => el.classList.add(classDark));
         $themeBtn.classList.remove(moon);
         $themeBtn.classList.add(sun);
         local.setItem("theme", "dark")
       }

       doc.addEventListener("click", (e) => {
        //  console.log(e.target);
         if(e.target.matches(btn)){
            if(flag){
                console.log("flag is true");
                dark();
                flag = false;
            }else{
                console.log("flag is false");
                light()
                flag = true;
            }
         }
       })
       doc.addEventListener("DOMContentLoaded",(e) => {
        if(local.getItem("theme") === null) local.setItem("theme", "light");
        if(local.getItem("theme") === "light") light();
        if(local.getItem("theme") === "dark") dark() 
      })
  }
  