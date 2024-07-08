const counter = document.getElementById("counter");
const display = document.getElementById("display");
let count = 0;

function increase(e){
    e.preventDefault();
    count += 1;
    display.innerHTML = count;
    display.style.transform = `scale(1.5)`;
    setTimeout(() => {
        display.style.transform = `scale(1)`;
    }, 200);
}

counter.addEventListener("click", increase);

const btn = document.getElementById("btn");
const col = document.getElementById("col");

btn.addEventListener("click", () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    let rgb = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgb;
    col.innerHTML= rgb;
})