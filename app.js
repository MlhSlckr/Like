const like = document.querySelector('.like');
const heart = document.querySelector('.heart');
const container = document.querySelector('.container')
const popup = document.querySelector('.popup');
const far = document.querySelector('.far');
const sıfırla = document.querySelector('.sıfırla');


let sayma = document.querySelector('.count');

let count = 0;

like.addEventListener('click', () => {
  if (container.classList.contains('liked')) {
    popup.classList.add('block');
  } else {
    count++;
    sayma.innerHTML = count;
    container.classList.add('liked');
  }
})

far.addEventListener('click', () => {
  popup.classList.remove('block');
})

sıfırla.addEventListener('click', () => {
  reset();
})

function reset() {
  count--;
  sayma.innerHTML = count;
  container.classList.remove('liked');
  popup.classList.remove('block');
}