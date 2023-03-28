// buttons
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btnBack = document.querySelector('.btn_back');

// form
const form = document.querySelector('form');
const check = document.querySelector('.containet');
const success = document.querySelector('.success')

btn.addEventListener('click', () => {
    form.classList.toggle('close');
    check.classList.toggle('active');
})

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    success.classList.toggle('active');
    // form.classList.toggle('close');
})