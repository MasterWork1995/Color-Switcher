const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector("[data-action=start]"),
    stop: document.querySelector("[data-action=stop]"),
    body: document.querySelector("body"),
}

let id = 0;
function onStart() {
    id = setInterval(() => {
        const index = randomIntegerFromInterval(0, 5);
        const color = colors[index];
        refs.body.style.backgroundColor = color;
    }, 1000);
    refs.start.setAttribute("disabled", "true");
}
    
function onStop() {
    clearInterval(id);
    refs.start.removeAttribute("disabled", "true")
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
