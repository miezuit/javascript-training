<template>
    <div>
        <form>
            <h2>Log In</h2>
            <label for="email">Email adress</label>
            <input class="form-control" type="text" name="email" id="email" v-model="email">
            <label for="password">Password</label>
            <input class="form-control" type="password" name="password" id="password" v-model="password">
            <input class="btn btn-success" type="button" value="Submit" @click="login">
            <div v-if="loginFailed" role="alert" class="alert alert-danger">
                Incorrect user and password
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

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
                    'http://localhost:8080/user/login',
                    {
                        params: {
                            email: this.email,
                            password: this.password
                        }
                    }
                )
                .then(response => {
                    this.loginFailed = false
                    this.$store.commit('login', response.data)
                    this.$router.push('/posts/view')
                })
                .catch(err => {
                    console.log(err)
                    this.loginFailed = true
                })
        }
    },
}
</script>

<style scoped>
form {
    width: 30vw;
    margin: auto;
    text-align: left;
}
input[type="button"] {
    margin-top: 1em;
}
div[role="alert"] {
    margin-top: 0.5em;
}
label {
    margin-top: 0.5em;
}
</style>
