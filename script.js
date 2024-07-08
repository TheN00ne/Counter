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