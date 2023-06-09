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

    axios.get('/orders')
        .then((response) => {

            let jsonResponse = response.data;
            console.log(jsonResponse);

            const items = document.querySelector('.items');

            for (let i = 0; i < jsonResponse.length; i++) {
                let item = document.createElement('div');
                item.classList.add('item');
                const p = document.createElement('p');
                p.innerHTML = jsonResponse[i].pizzaType;

                const amount1 = document.createElement('div');
                amount1.innerHTML = jsonResponse[i].amount;

                const dateTimeDiv = document.createElement('div');
                dateTimeDiv.innerHTML = jsonResponse[i].DataAndTime;

                item.appendChild(p);
                item.appendChild(amount1);
                item.appendChild(dateTimeDiv);
                items.appendChild(item);
            }


        });

})

// btnBack.addEventListener('click', () => {
//     check.style.display = 'none';
//     form.style.display = 'block';
// })

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    axios.post('/order', {
        pizzaType: document.querySelector('select').value,
        amount: document.querySelector('input').value
    })
        .then(function (response) {
            console.log(response);
        })
})


