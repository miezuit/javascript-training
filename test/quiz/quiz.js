import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class Answer {
    constructor(id, text) {
        this.id = id
        this.text = text
    }
}

class Question {
    constructor(id, text, answers, correctAnswer) {
        this.id = id
        this.text = text
        this.answers = answers
        this.correctAnswer = correctAnswer
        this.answer = null
        this.shuffleAnswers()
    }
    shuffleAnswers() {
        shuffleArray(this.answers)
    }
    giveAnswer(answer) {
        this.answer = answer
    }
    hasCorrectAnswer() {
        return this.answer === this.correctAnswer
    }
    isAnswerSelected(answer) {
        return this.answer === answer
    }
    calculatePoints() {
        if(this.hasCorrectAnswer()) {
            return 1;
        }
        return 0;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions
        this.activeQuestion = 0
        this.finished = false
    }
    answerQuestion(answer) {
        if (this.finished) {
            return;
        }
        this.getActiveQuestion().giveAnswer(answer)
    }
    goToNextQuestion() {
        if (this.isLastQuestion()) {
            this.finish()
        } else {
            this.activeQuestion++
        }
    }
    getActiveQuestion() {
        return this.questions[this.activeQuestion]
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
}

const store = new Vuex.Store({
    state: {
        quiz: new Quiz(
            [
                new Question(
                    1,
                    'Cati litri de apa e bine sa bei pe zi?',
                    [
                        new Answer(1, '1 litru'),
                        new Answer(2, '0.5 litri'),
                        new Answer(3, '2 litri'),
                        new Answer(4, '5 litri')
                    ],
                    3
                ),
                new Question(
                    2,
                    'Cum se poate modifica starea din Vuex?',
                    [
                        new Answer(1, 'folosind mutatii'),
                        new Answer(2, 'modificand direct proprietatile starii'),
                        new Answer(3, 'apeland direct metoda din mutatations'),
                        new Answer(4, 'starea nu se poate modifica')
                    ],
                    1
                ),
                new Question(
                    3,
                    'Cum se poate face two-way-binding in VueJS?',
                    [
                        new Answer(1, 'folosind v-model'),
                        new Answer(2, 'nu se poate face two way binding in VueJS'),
                        new Answer(3, 'folosind v-data'),
                        new Answer(4, 'folosind v-two-way-binding')
                    ],
                    1
                ),
            ]
        )
    },
    mutations: {
        answerQuestion: (state, answer) => state.quiz.answerQuestion(answer),
        goToNextQuestion: (state) => state.quiz.goToNextQuestion()
    },
    getters: {
        activeQuestion: (state) => state.quiz.getActiveQuestion(),
        isQuizFinished: (state) => state.quiz.finished,
        quizScore: (state) => state.quiz.calculateScore()
    }
})

const quiz = {
    template: `
    <div>
        <div v-if="isQuizFinished">
            Scorul tau este: {{ quizScore }}
        </div>
        <div v-else>
            <p>{{ activeQuestion.id }}. {{ activeQuestion.text }} </p>
            <ol>
                <li 
                    v-for="(answer) in activeQuestion.answers"
                    :key="answer.id"
                    @click="answerQuestion(answer.id)"
                    :class="{ selected : activeQuestion.isAnswerSelected(answer.id) }"
                >
                    {{ answer.text }}
                </li>
            </ol>
            <input type="button" @click="next" value="Next"></input>
        </div>
    </div>
    `,
    methods: {
        answerQuestion(answer) {
            store.commit('answerQuestion', answer)
        },
        next() {
            store.commit('goToNextQuestion')
        }
    },
    computed: {
        activeQuestion: () => store.getters.activeQuestion,
        isQuizFinished: () => store.getters.isQuizFinished,
        quizScore: () => store.getters.quizScore,
    },
}

new Vue({
    el: '#app',
    components: {quiz},
    store,
    template: `
        <quiz></quiz>
    `
})