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

const updateBoxes = boxPerSide => {
    document.documentElement.style.setProperty("--box-per-side", `${boxPerSide}`);
    const getBoxes = () => document.querySelectorAll(".box");
    getBoxes().forEach(box => box.addEventListener("mouseenter", e => e.target.classList.add("filled")));
};
updateBoxes(currSize);

const removeBoxes = () => boxContainer.replaceChildren();

const getRndColor = () => {
    const rndR = Math.floor(Math.random() * 256);
    const rndG = Math.floor(Math.random() * 256);
    const rndB = Math.floor(Math.random() * 256);
    return `rgb(${rndR}, ${rndG}, ${rndB})`;
};

resizeBtn.addEventListener("click", e => {
    const newSize = parseInt(prompt("Enter the new size up to 100", currSize));
    if (!newSize || newSize > 100) return;
    currSize = newSize;
    removeBoxes();
    addBoxes(currSize);
    updateBoxes(currSize);
});