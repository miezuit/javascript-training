<template>
    <div>
        <h1>Hello {{userName}}! Welcome to my blog!</h1>
    </div>
</template>

<script>

import store from '../store/store.js'

export default {
    computed: {
        userName() {
            return store.state.name
        }
    }
}
</script>

<style scoped>
 div {
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
</style>