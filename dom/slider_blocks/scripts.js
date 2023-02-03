let sliderValEl = document.getElementById('sliderValue');
let slider = document.getElementById('boxSlider');
let menu = document.querySelector('.menu')
const boxWrapper = document.querySelector('.box__container');
const button = document.querySelector('.button');

sliderValEl.innerHTML = slider.value;

button.addEventListener('click', (e) => {
  button.classList.toggle("change");
  menu.classList.toggle("move-in");
  boxWrapper.classList.toggle("move-out");
});

slider.addEventListener('change', (e) => {
  sliderValEl.innerHTML = e.target.value;
  document.querySelectorAll(".box").forEach(el => el.remove());
  for(let i = 0; i < e.target.value; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.background = random_bg_color();
    boxWrapper.appendChild(box);
  }
});

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

