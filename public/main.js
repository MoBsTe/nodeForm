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

                const date = document.createElement('div');
                let today = new Date();
                let now = today.toLocaleString();
                date.textContent = now;


                item.appendChild(p);
                item.appendChild(amount1);
                item.appendChild(date);
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
    const select = document.querySelector('select').value;
    const input = document.querySelector('input').value;

    console.log(select);
    console.log(input);






    // axios.post({
    //     url: '/order',
    //     data: {
    //         Pizza_type: select,
    //         amount: amount
    //     }
    // });
})


