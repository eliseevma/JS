"use strict";

let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt('Введите дату в формате YYYY - MM - DD',"");


let appData ={
    budget: money,
    timeData: time,
    expenses:{},
    income:[],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expanse = prompt("Введите обязательную статью расходов в этом месяце", "");
    let cost = +prompt("Во сколько обойдется?", "");
    if (typeof (expanse) === "string" && typeof (expanse) != null && typeof (cost) != null 
    && expanse != "" && cost != "" && expanse.length < 50) {
        appData.expenses[expanse] = cost;
    }
    console.log('Не верно указанны данные');
}

appData.budgetPerDay = appData.budget / 30;
console.log(`Ваш бюджет на 1 день: ${appData.budgetPerDay} рублей`);

if (appData.budgetPerDay < 100) {
    console.log('Минимальный уровень достатка');    
} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000){
    console.log('Средний уровень достатка')
} else if (appData.budgetPerDay > 2000){
    console.log('Большой уровень достатка');
} else{
    console.log('Произошла ошибка')
}

/*
Вопросы к этому заданию
Сколько типов данных существует в JS? - 7

Как вывести информацию в консоль? console.log();

Какая функция операторов || и &&? соблюдение условия
*/