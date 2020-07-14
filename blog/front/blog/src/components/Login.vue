<template>
    <div class="container">
        <form>
            <h2>Log In</h2>
            <label for="email">Email address</label>
            <input class="form-control" type="text" id="email" v-model="email">
            <label for="password">Password</label>
            <input class="form-control" type="password" id="password" v-model="password">
            <input class="btn btn-success" type="button" value="Submit" @click="login">
            <div v-if="loginFailed" class="alert alert-danger" role="alert">
                Incorrect email and password
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store/store.js'

export default {
    data() {
        return {
            email: null,
            password: null,
            loginFailed: false
        }
    },
    methods: {
        login() {
            axios
                .get(
                    'http://localhost:8000/user/login',
                    {
                        params: {
                            email: this.email,
                            password: this.password
                        }
                    }
                )
                .then(result => {
                    this.loginFailed = false
                    store.commit('saveLoginData', {
                        name: result.name,
                        email: result.email,
                        token: result.token
                    })
                    this.$router.push('/blog')
                })
                .catch(error => {
                    console.log(error)
                    this.loginFailed = true
                })
        }
    },
}
</script>

<style scoped>
 div.container {
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 form {
     border: 1px solid #cccccc;
     border-radius: 10px;
     padding: 1em;
 }
 input[type="button"] {
     margin-top: 1em;
 }
 div.alert {
     margin-top: 1em;
 }
</style>