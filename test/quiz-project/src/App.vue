<template>
  <Quiz></Quiz>
</template>

<script>
import Quiz from './components/Quiz.vue'
import store from './store/index.js'

export default {
  name: 'App',
  store,
  components: {
    Quiz
  }
}
</script>

<style>
</style>
