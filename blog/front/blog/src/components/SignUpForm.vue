<template>
    <form>
        <input type="text" id="email" v-model="email">
        <input type="text" id="name" v-model="name">
        <input type="password" id="password" v-model="password">
        <input type="button" value="Submit" @click="signup">
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: null,
            name: null,
            password: null
        }
    },
    methods: {
        signup: () => {
            axios
                .post(
                    'http://localhost/user',
                    {
                        name: this.data.name,
                        email: this.data.email,
                        password: this.data.password,
                    }
                )
                .then(this.$router.go('/signup/success'))
                .catch(error => console.log(error));
        }
    },
}
</script>

<style scoped>
 form {
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 input {
     display: block;
 }
</style>