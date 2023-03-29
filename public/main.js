// buttons
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btnBack = document.querySelector('.btn_back');

// form
const form = document.querySelector('form');
const check = document.querySelector('.containet');
const success = document.querySelector('.success');

btn.addEventListener('click', () => {
    form.classList.toggle('close');
    check.classList.toggle('active');
})

// btnBack.addEventListener('click', () => {
//     check.style.display = 'none';
//     form.style.display = 'block';
// })

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    const select = document.querySelector('select').value;
    const items = document.querySelector('.items');

    const item = document.createElement('div');
    item.classList.add('item');

    const p = document.createElement('p');
    p.textContent = select;

    // кол-во заказанно
    const input = document.querySelector('input').value;
    const amount = document.createElement('div');
    if (input == 0) {
        alert('sfsdfsdffsd');
    }
    amount.classList.add('amount');
    amount.textContent = input;

    // время заказа
    const date = document.createElement('div');
    let today = new Date();
    let now = today.toLocaleString();
    date.textContent = now;


    item.appendChild(p);
    item.appendChild(amount);
    item.appendChild(date);
    items.appendChild(item);
})


