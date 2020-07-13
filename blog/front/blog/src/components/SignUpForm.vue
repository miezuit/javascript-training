<template>
    <div>
        <input type="text" id="email" v-model="email">
        <input type="text" id="name" v-model="name">
        <input type="password" id="password" v-model="password">
        <input type="button" value="Submit" @click="signup">
    </div>
</template>

<script>
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
                    apiUri + '/user',
                    {
                        name: this.data.name,
                        email: this.data.email,
                        password: this.data.password,
                    }
                )
                .then()
                .catch(error => console.log(error));
        }
    },
}
</script>

<style scoped>

</style>