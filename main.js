const foodCheck = document.getElementById('food');
const drinkCheck = document.getElementById('drink');
const desertCheck = document.getElementById('dessert');

const food = document.getElementById('food__food');
const drink = document.getElementById('food__drink');
const desert = document.getElementById('food__desert');

function first (){
    if (!foodCheck.checked) {
        food.style.display = 'none';
    }else {
        food.style.display = 'flex';
    }
}
function second (){
    if (!drinkCheck.checked) {
        drink.style.display = 'none';
    }else {
        drink.style.display = 'flex';
    }
}
function third (){
    if (!desertCheck.checked) {
        desert.style.display = 'none';
    }else {
        desert.style.display = 'flex';
    }
}
foodCheck.addEventListener('click',first);
drinkCheck.addEventListener('click', second);
desertCheck.addEventListener('click', third);

const check = document.getElementsByTagName("input");
const selectAll = document.getElementById('select');

selectAll.addEventListener('click', function (){
    if (check[0].checked && check[1].checked && check[2].checked){
        for (let i = 0; i <= 2; i++) {
            check[i].checked = false;
        }
        first();
        second();
        third();
    }else {
        for (let i = 0; i <= 2; i++) {
            check[i].checked = true;
        }
        first();
        second();
        third();
    }
})


const select = document.querySelectorAll('.food__box');
let cost = 0;
function select1(){
    if (select[0].style.height === '361px'){
        select[0].style.borderColor = "";
        select[0].style.borderStyle = '';
        select[0].style.borderWidth = '';
        select[0].style.height = '375px';
        select[0].style.width = '325px';
        cost -= 275;

    }else {
        select[0].style.borderColor = "black";
        select[0].style.borderStyle = 'solid';
        select[0].style.borderWidth = '7px';
        select[0].style.height = '361px';
        select[0].style.width = '311px';
        cost += 275;
    }
}

function select2(){
    if (select[1].style.height === '361px'){
        select[1].style.borderColor = "";
        select[1].style.borderStyle = '';
        select[1].style.borderWidth = '';
        select[1].style.height = '375px';
        select[1].style.width = '325px';
        cost -= 325;

    }else {
        select[1].style.borderColor = "black";
        select[1].style.borderStyle = 'solid';
        select[1].style.borderWidth = '7px';
        select[1].style.height = '361px';
        select[1].style.width = '311px';
        cost += 325;
    }
}

function select3(){
    if (select[2].style.height === '361px'){
        select[2].style.borderColor = "";
        select[2].style.borderStyle = '';
        select[2].style.borderWidth = '';
        select[2].style.height = '375px';
        select[2].style.width = '325px';
        cost -= 400;

    }else {
        select[2].style.borderColor = "black";
        select[2].style.borderStyle = 'solid';
        select[2].style.borderWidth = '7px';
        select[2].style.height = '361px';
        select[2].style.width = '311px';
        cost += 400;
    }
}
function select4(){
    if (select[3].style.height === '361px'){
        select[3].style.borderColor = "";
        select[3].style.borderStyle = '';
        select[3].style.borderWidth = '';
        select[3].style.height = '375px';
        select[3].style.width = '325px';
        cost -= 120;

    }else {
        select[3].style.borderColor = "black";
        select[3].style.borderStyle = 'solid';
        select[3].style.borderWidth = '7px';
        select[3].style.height = '361px';
        select[3].style.width = '311px';
        cost += 120;
    }
}
function select5(){
    if (select[4].style.height === '361px'){
        select[4].style.borderColor = "";
        select[4].style.borderStyle = '';
        select[4].style.borderWidth = '';
        select[4].style.height = '375px';
        select[4].style.width = '325px';
        cost -= 125;

    }else {
        select[4].style.borderColor = "black";
        select[4].style.borderStyle = 'solid';
        select[4].style.borderWidth = '7px';
        select[4].style.height = '361px';
        select[4].style.width = '311px';
        cost += 125;
    }
}
function select6(){
    if (select[5].style.height === '361px'){
        select[5].style.borderColor = "";
        select[5].style.borderStyle = '';
        select[5].style.borderWidth = '';
        select[5].style.height = '375px';
        select[5].style.width = '325px';
        cost -= 85;

    }else {
        select[5].style.borderColor = "black";
        select[5].style.borderStyle = 'solid';
        select[5].style.borderWidth = '7px';
        select[5].style.height = '361px';
        select[5].style.width = '311px';
        cost += 85;
    }
}
function select7(){
    if (select[6].style.height === '361px'){
        select[6].style.borderColor = "";
        select[6].style.borderStyle = '';
        select[6].style.borderWidth = '';
        select[6].style.height = '375px';
        select[6].style.width = '325px';
        cost -= 115;

    }else {
        select[6].style.borderColor = "black";
        select[6].style.borderStyle = 'solid';
        select[6].style.borderWidth = '7px';
        select[6].style.height = '361px';
        select[6].style.width = '311px';
        cost += 115;
    }
}
function select8(){
    if (select[7].style.height === '361px'){
        select[7].style.borderColor = "";
        select[7].style.borderStyle = '';
        select[7].style.borderWidth = '';
        select[7].style.height = '375px';
        select[7].style.width = '325px';
        cost -= 95;

    }else {
        select[7].style.borderColor = "black";
        select[7].style.borderStyle = 'solid';
        select[7].style.borderWidth = '7px';
        select[7].style.height = '361px';
        select[7].style.width = '311px';
        cost += 95;
    }
}
function select9(){
    if (select[8].style.height === '361px'){
        select[8].style.borderColor = "";
        select[8].style.borderStyle = '';
        select[8].style.borderWidth = '';
        select[8].style.height = '375px';
        select[8].style.width = '325px';
        cost -= 90;

    }else {
        select[8].style.borderColor = "black";
        select[8].style.borderStyle = 'solid';
        select[8].style.borderWidth = '7px';
        select[8].style.height = '361px';
        select[8].style.width = '311px';
        cost += 90;
    }
}

const btn = document.getElementById('cost');
const num = document.getElementById('num');
btn.addEventListener('click', function (){
    num.innerHTML = cost + ' грн';
})

const pay = document.getElementById('pay');
pay.addEventListener('click', function () {
    window.location.href = 'pay.html';

})

function alertion(){
    alert("Ваш заказ оброблюється.Очікуйте");
}
