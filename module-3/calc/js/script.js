'use strict'

const uan = document.querySelector('#uah');
const usd = document.querySelector('#usd');

uan.addEventListener('input', inputTypeHandler);

function inputTypeHandler() {
    console.log('yeah');
    const myRequest = new XMLHttpRequest();

    myRequest.open('GET', 'js/curarent.json');
    myRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    myRequest.send();

    myRequest.addEventListener('load', statusHandler);

    function statusHandler() {
        if (myRequest.status === 200) {
            const data = JSON.parse(myRequest.response);
            usd.value = Math.round(uan.value / data.sale);
        }
        else {
            usd.value = 'Ошибка';
        }
    }
}