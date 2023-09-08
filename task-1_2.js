// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
    brand: "Hundai",
    model: "Avante",
    year: 2017,
    speed: 100,
    showInfo(){
        return `Марка: ${this.mark}; Модель: ${this.model}; Рік випуску: ${this.year};`
    }
}
const state = {
    city: "Vinnytsia",
    distance: 120
}

const myCar = Object.assign(car, state);
console.log(myCar)

function showTime(car){
    console.log(`Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${car.city} за ${car.distance / car.speed}`)
}
console.log(showTime(myCar))