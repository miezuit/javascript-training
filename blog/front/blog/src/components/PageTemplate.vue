<template>
    <div>
        <MainMenu></MainMenu>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu'

export default {
    components: { MainMenu },
    mounted() {
        // daca nu sunt logat trimite catre login
        if (!this.$store.state.user.token) {
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
div.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
form {
    width: 40vw;
    margin: auto;
    text-align: left;
}
input[type="button"] {
    margin-top: 1em;
}
label {
    margin-top: 0.5em;
}
</style>