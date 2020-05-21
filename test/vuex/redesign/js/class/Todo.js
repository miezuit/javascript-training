class Todo {
    constructor(title) {
        this.title = title;
        this.isDone = false;
        this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    switchDone() {
        this.isDone = !this.isDone;
    }
}

export { Todo }