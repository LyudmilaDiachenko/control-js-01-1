// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

class Student {
    constructor(name, age, rate){
        this.name = name
        this.age = age
        this.rate = rate
    }
    hello(){
        return `Привіт, ${this.name}!`
    }
}

const students = [
    new Student("Микита", 17, 1.0),
    new Student("Микола", 16, 2.0),
    new Student("Маруся", 18, 3.0),
]

let hellos = students.map(e => e.hello())
console.log(hellos)

const minRate = 2
let ratedStudents = students.filter(e => e.rate >= minRate)
console.log(ratedStudents)

function addRating(cnt){
    this.rate += cnt
}

students.forEach(e => addRating.call(e, 1.0))
console.log(students)