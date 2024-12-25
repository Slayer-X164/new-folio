const cursorAnimation = () => {
  const circle = document.querySelector(".circle");

  window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    circle.style.left = x - 14 + "px";
    circle.style.top = y - 16 + "px";

    circle.animate(
      {
        left: x - 14 + "px",
        top: y - 16 + "px",
      },
      { duration: 1, fill: "forwards" }
    );
  });
};

const preLoader = ()=>{
    const loaderContainer = document.querySelector(".loader_container")
    const main = document.querySelector("main")

    window.addEventListener("load",()=>{
        loaderContainer.classList.add('hidden')
        main.classList.add('visible')
    })
}

const mobileNavToggle = ()=>{
  const mobile_nav = document.querySelector(".mobile_nav")
  const menu_close = document.querySelector(".close_menu")
  const open_menu = document.querySelector(".menu")

  open_menu.addEventListener("click",()=>{
    mobile_nav.style.transform = "translateY(0)"
  })

  menu_close.addEventListener("click",()=>{
    mobile_nav.style.transform = "translateY(-100%)"
  })
}

const openLinkdein = ()=>{
  const linkedin_logo = document.querySelector(".linkedin_logo")
  linkedin_logo.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/siddhesh-ghag-110359217/", "_blank");
  });
}

openLinkdein()
mobileNavToggle()
preLoader()
cursorAnimation();
