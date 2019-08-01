"use strict";
let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt('Введите дату в формате YYYY - MM - DD', "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


let appData ={
    budget: money,
    timeData: time,
    expenses:{},
    income:[],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expanse = prompt("Введите обязательную статью расходов в этом месяце", "");
            let cost = +prompt("Во сколько обойдется?", "");
            if (typeof (expanse) === "string" && typeof (expanse) != null && typeof (cost) != null
                && expanse != "" && cost != "" && expanse.length < 50) {
                appData.expenses[expanse] = cost;
                console.log('Done');
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.budgetPerDay = (appData.budget / 30).toFixed();
        alert(`Ваш бюджет на 1 день: ${appData.budgetPerDay} рублей`);
    },
    detectLevel: function () {
        if (appData.budgetPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
            console.log('Средний уровень достатка')
        } else if (appData.budgetPerDay > 2000) {
            console.log('Большой уровень достатка');
        } else {
            console.log('Произошла ошибка')
        }
    },
    chekSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какокй процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }

    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите не обязательную статью расходов в этом месяце", "");
            let b = +prompt("Во сколько обойдется?", "");
            if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null
                && a != "" && b != "" && a.length < 50) {
                appData.optionalExpenses[a] = b;
                console.log('Done');
            } else {
                i = i - 1;
            }


        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
        
        while (items == "" || items == null) {
             items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        appData.income.forEach(function (item, i) {
            console.log(`${i}: ${item} `);
        })

        
    },
    
};

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}`);
}







