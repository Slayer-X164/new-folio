const circle = document.querySelector(".circle");

// Listen for mouse movement
window.addEventListener("mousemove", (e) => {
  let x = e.clientX
  let y = e.clientY

  circle.style.left = x - 14 + "px"
  circle.style.top = y - 16+ "px"

  circle.animate({
    left:x - 14 + "px",
    top:y - 16+ "px"
  },{duration:1,fill:"forwards"})
});
