function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

class Color {
    red
    green
    blue

    constructor(red, green, blue) {
        this.red = red
        this.blue = blue
        this.green = green
    }

    static random() {
        return new Color(randomNumber(255), randomNumber(255), randomNumber(255))
    }

    getCssColor() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
}

class Task {
    description
    color
    done = false

    constructor(description) {
        this.description = description
        this.color = Color.random()
    }

    getColor() {
        return this.color
    }

    switchDone() {
        this.done = !this.done
    }

    isDone() {
        return this.done
    }

    getDescription() {
        return this.description
    }

    changeDescription(newDescription) {
        this.description = newDescription
    }
}

class TodoList {
    name 
    tasks = []

    constructor(name) {
        this.name = name
    }

    add(task) {
        this.tasks.push(task)
    }

    remove(taskIndex) {
        this.tasks.splice(taskIndex, 1)
    }

    rename(newName) {
        this.name = newName
    }

    getName() {
        return this.name
    }

    getTasks() {
        return this.tasks
    }
}

export {Color, Task, TodoList}
