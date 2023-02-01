const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
  button.classList.toggle("change");
  navbar.classList.toggle('navbar--showed');
});

console.log("hello world!");