// # Завдання 1

// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для доступу до властивостей об'єкту.

const person = {
    name: "Lyudmila",
    age: "20",
    gender: "жінка",
    introduce(){
        return `Мене звати ${this.name}, мені ${this.age} років я ${this.gender}`
    },
    changeName(newName){
        this.name = newName
    },
}
console.log(person.introduce())
console.log(person.changeName("Mila"))
console.log(person.introduce())

