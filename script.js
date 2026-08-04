const boxContainer = document.querySelector("#box-container");
const resizeBtn = document.querySelector("#resize-btn");
let currSize = 16;

const addBoxes = boxPerSide => {
    for (let i = 0; i < boxPerSide**2; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        boxContainer.appendChild(box);
    }
};
addBoxes(currSize);

const updateBoxes = () => {
    const getBoxes = () => document.querySelectorAll(".box");
    getBoxes().forEach(box => box.addEventListener("mouseenter", e => e.target.classList.add("filled")));
};
updateBoxes();