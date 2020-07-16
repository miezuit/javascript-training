<template>
    <div>
        <form>
            <h2>Sign Up</h2>
            <label for="email">Email adress</label>
            <input class="form-control" type="text" name="email" id="email" v-model="email">
            <label for="name">Name</label>
            <input class="form-control" type="text" name="name" id="name" v-model="name">
            <label for="password">Password</label>
            <input class="form-control" type="password" name="password" id="password" v-model="password">
            <input class="btn btn-primary" type="button" value="Submit" @click="signup">
        </form>
    </div>
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
        signup() {
            axios
                .post(
                    'http://localhost:8080/user',
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                )
                .then(this.$router.push('/signup/success'))
                .catch(error => console.log(error))
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
label {
    margin-top: 0.5em;
}
</style>