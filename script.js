const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const name = document.querySelector('#name').value;
    const secondName = document.querySelector('#secondName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const agree = document.querySelector('#agree').checked;


    const data = {
        'name': name,
        'secondName': secondName,
        'phone': phone,
        'email': email,
        'agree': agree
    }


    fetch('http://46.21.248.81:3001/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: vfed'
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            form.reset();
            alert('Успешно');
        } else {
            alert('Ошибка');
        }
    }).catch(error => {
        alert('Ошибка');
    })
});