<template>
    <header>
        <ul>
            <li><router-link to="/posts/view">View Posts</router-link></li>
            <li><router-link to="/posts/add">Add new post</router-link></li>
            <li><a @click="logout" href="#">Logout {{name}}</a></li>
        </ul>
    </header>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.commit('logout')
            this.$router.push('/login')
        }
    },
    computed: {
        name() {
            return this.$store.state.user.name;
        }
    },
}
</script>

<style scoped>
ul {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    list-style-type: none;
}
li {
    margin: 1em 2em;
}
.router-link-active {
    font-weight: bold;
}
</style>