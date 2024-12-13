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
preLoader()
cursorAnimation();
