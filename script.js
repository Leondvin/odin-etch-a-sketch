const boxContainer = document.querySelector("#box-container");
const resizeBtn = document.querySelector("#resize-btn");
let currSize = 16;

for (let i = 0; i < 16**2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    boxContainer.appendChild(box);
}
const getBoxes = () => document.querySelectorAll(".box");
getBoxes().forEach(box => box.addEventListener("mouseenter", e => e.target.classList.add("filled")));