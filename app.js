const like = document.querySelector('.like');
const heart = document.querySelector('.heart');
const main = document.querySelector('.main')
const popup = document.querySelector('.popup');
const far = document.querySelector('.far');
const sıfırla = document.querySelector('.sıfırla');
const alert = document.querySelector('.alert');

let sayma = document.querySelector('.count');

let count = 0;

like.addEventListener('click', () => {
  if (main.classList.contains('liked')) {
    popup.classList.add('block');
  } else {
    count++;
    sayma.innerHTML = count;
    main.classList.add('liked');
  }
})

far.addEventListener('click', () => {
  popup.classList.remove('block');
})

sıfırla.addEventListener('click', () => {
  reset();
})

let x = 0;

function reset() {
  count--;
  sayma.innerHTML = count;
  main.classList.remove('liked');
  popup.classList.remove('block');
  alert.classList.add('right');
  alert.classList.add('animation');
  const interval = setInterval(() => {
    x++;
    console.log(x)
    if (x > 2) {
      alert.classList.remove('right');

    } if (x > 3) {
      alert.classList.remove('animation');
      clearInterval(interval);
      x = 0;
    }
  }, 1000);
}

alert.addEventListener('click', () => {
  alert.classList.remove('animation');
  alert.classList.remove('right');
})
