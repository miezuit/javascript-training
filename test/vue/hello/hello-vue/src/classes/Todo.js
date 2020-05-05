class Todo {
    constructor(title) {
        this.id = this.randomId();
        this.title = title;
        this.isDone = false;
        this.color = this.randomColor();
    }
    switchDone() {
        this.isDone = !this.isDone;
    }
    randomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    randomId() {
        return Math.random().toString(16).substring(2, 15);
    }
}

export default Todo;