"use strict";

let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt('Введите дату в формате YYYY - MM - DD',"");
let expanse = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost =  +prompt("Во сколько обойдется?","")
let appData ={
    budget: money,
    timeData: time,
    expenses:{
        expanse: cost
    },
    income:[],
    savings: false
};

alert(`Ваш бюджет на 1 день: ${(money-cost)/30} рублей`);

/*
Вопросы к этому заданию
Сколько типов данных существует в JS? - 7

Как вывести информацию в консоль? console.log();

Какая функция операторов || и &&? соблюдение условия
*/