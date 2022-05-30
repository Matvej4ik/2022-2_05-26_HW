const temp = document.querySelector('.test');
temp.innerHTML = 'Тестовая строка';

const temp2 = document.querySelector('input[name="test"]');
temp2.addEventListener('change', (ev) => {
    const text = ev.target.value;
    temp.innerHTML = text;
    console.log('Ура!!! Получилось :)');

});
