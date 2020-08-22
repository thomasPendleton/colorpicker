const colors = [
  "red",
  "chartreuse",
  "orange",
  "yellow",
  "blue",
  "purple",
  "green",
  "pink",
  "aqua",
];

const header = document.querySelector("#header");
const body = document.querySelector("body");

const cont = document.querySelector("#container");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("boxes");
  cont.appendChild(box);

  box.addEventListener("click", function () {
    pickedColor = box.style.backgroundColor;
    header.style.color = pickedColor;
  });
  box.addEventListener("dblclick", function () {
    pickedColor = box.style.backgroundColor;
    body.style.backgroundColor = pickedColor;
  });
}

window.addEventListener("keyup", function (event) {
  console.log(event.keyCode);
  if (event.keyCode === 46) {
    body.style.backgroundColor = "white";
    header.style.color = "black";
  }
});
