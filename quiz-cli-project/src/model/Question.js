export default class Question {
    constructor(text, answers, correctAnswer) {
        this.text = text
        this.answers = answers
        this.correctAnswer = correctAnswer
        this.answer = null
        this.shuffleAnswers()
    }
    giveAnswer(answer) {
        this.answer = answer
    }
    hasCorrectAnswer() {
        return this.answer === this.correctAnswer
    }
    calculatePoints() {
        if(this.hasCorrectAnswer()) {
            return 1;
        }
        return 0;
    }
    isSelectedAnswer(answer) {
        return this.answer == answer
    }
    shuffleAnswers() {
        this.answers.sort(function() {
            return 0.5 - Math.random();
        });
    }
}