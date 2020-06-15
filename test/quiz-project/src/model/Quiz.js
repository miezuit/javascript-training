export default class Quiz {
    constructor(questions) {
        this.questions = questions
        this.activeQuestion = 0
        this.finished = false
    }
    answerQuestion(answer) {
        if (this.finished) {
            return;
        }
        this.questions[this.activeQuestion].giveAnswer(answer)
    }
    next() {
        if (this.isLastQuestion()) {
            this.finish()
        } else {
            this.activeQuestion++
        }
    }
    back() {
        if (this.activeQuestion > 0) {
            this.activeQuestion--
        }
    }
    isLastQuestion() {
        return this.activeQuestion == this.questions.length - 1
    }
    finish() {
        this.finished = true
    }
    calculateScore() {
        return this.questions.reduce(
            (score, question) => score + question.calculatePoints(),
            0
        )
    }
    getActiveQuestion() {
        return this.questions[this.activeQuestion]
    }
}