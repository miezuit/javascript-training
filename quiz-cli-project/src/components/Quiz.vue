<template>
    <div>
        <div v-if="isQuizFinished">
            Scorul tau este: {{ quizScore }}
        </div>
        <div v-else>
        <p> {{ activeQuestion.text }} </p>
        <ol>
            <li 
                    v-for="(answer) in activeQuestion.answers"
                    :key="answer.id"
                    @click="answerQuestion(answer.id)"
                    :class="{ selected : activeQuestion.isSelectedAnswer(answer.id) }"
            >
            {{ answer.text }}
            </li>
        </ol>
        <input type="button" @click="back" value="Back">
        <input type="button" @click="next" value="Next">
        </div>
    </div>
</template>

<script>

import store from '../store/index.js'

export default {
    methods: {
        answerQuestion: (answer) => store.commit('answerQuestion', answer),
        next: () => store.commit('next'),
        back: () => store.commit('back')
    },
    computed: {
        activeQuestion: () => store.getters.activeQuestion,
        isQuizFinished: () => store.getters.isQuizFinished,
        quizScore: () => store.getters.quizScore,
    }
}
</script>

<style>
li.selected {
    color: orange;
    font-weight: bold;
}
ol {
    list-style-type: lower-alpha;
}
li {
    cursor: pointer;
}
</style>