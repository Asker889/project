// Разница между объектами и массивами
const arr = [1,2,3]; //Массив 
// const obj = {a:1, b:2};
console.log(arr[0])
const obj = {
    'Anna' : 500,
    'Alice': 800
};
console.log(obj.Anna)

obj.petr = '1000' ;//Добавляем одно свойство в объект
obj['anton'] = '2000' ;// Добавление только с квадратными скобками
console.log(obj['petr']) // Обязательно добавлять ключ в ковычках
console.log(obj.petr) // или через точку
console.log(obj['anton'])

// Передавать свойство перменной 
const lena = 'lena'
obj[lena] = '3000'
console.log(obj.lena)