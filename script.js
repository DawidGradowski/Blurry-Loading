const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0;
let startingBlur = 70;

let unblurring_interval = setInterval(unblurring, 30)

function unblurring() {
    load++;
    if (load >= 100) {
        clearInterval(unblurring_interval);
        loadText.style.display = "none";
    }
    loadText.innerText = String(load)+'%';
    loadText.style.opacity = 1-(load/100);
    background.style.filter = "blur(" + String(scale(load, 0, 100, 30, 0)) + "px)" 
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}