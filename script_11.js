'use strict'
//Обращение к элементам от родителя
const test1 = document.querySelector('.income');
console.log(test1.querySelector('div:first-child'));
console.log(test1.querySelector('div:nth-child(2) input:nth-child(2)'));

//прописывание полного пути
const test2 = document.querySelector('body section.main .calc .income .income-items .income-title');
console.log(test2);

//сбор массивов или элемента по его аттрибутам (type, data, rel, href и т.д.)
const test3 = document.querySelectorAll('input[type=text]');
console.log(test3);

//сбор массивов или элемента по его аттрибуту со значением
const test4 = document.querySelectorAll('[data-id="10"]');
console.log(test4);

//получение соседнего элемента
const test5 = document.querySelector('input[type="tel"] ~ input[type="text"]');
console.log(test5);

//получить все классы которые оканчиваются на -value
const test6 = document.querySelectorAll('.result [class$="-value"]');
console.log(test6);

//получить все классы которые начинается на result-t
const test7 = document.querySelectorAll( "[class^='result-t']" );
console.log(test7);

//получить все элементы по второму классу
const test8 = document.querySelectorAll( "[class^='result-total budget_m']" );
console.log(test8);

//Получить все элементы заканчивающиеся названия класса кроме определенного Элемента
const test9 = document.querySelectorAll('.result [class$="-value"]:not(.budget_month-value)');
console.log(test9);

//Получить все элементы заканчивающиеся названия класса кроме определенных элементов
const test10 = document.querySelectorAll('.result [class$="-value"]:not(.budget_month-value):not(.budget_day-value)');
console.log(test10);

//Получить все элементы кроме определенных элементов начиная с определенных классов
const test11 = document.querySelectorAll( "[class^='result-total budget_']:not(.budget_day-value)" );
console.log(test11);