<template>
    <PageTemplate>
        <article v-for="post in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <h6>{{ new Date(post.date).toLocaleDateString() }}</h6>
            <p>{{post.content}}</p>
            <router-link :to="{path: '/posts/edit/' + post.id}">Edit</router-link>
            <a href="#" @click="del(post.id)">Delete</a>
        </article>
    </PageTemplate>
</template>

<script>
import axios from 'axios'
import PageTemplate from './PageTemplate'

export default {
    components: { PageTemplate },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        getPosts() {
            axios
                .get(
                    'http://localhost:8080/posts',
                    {
                        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
                    }
                )
                .then(resp => this.posts = resp.data)
                .catch(err => console.log(err))
        },
        del(postId) {
            axios
                .delete(
                    'http://localhost:8080/posts/' + postId,
                    {
                        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
                    }
                )
                .then(() => this.getPosts())
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getPosts()
    },
}
</script>

<style scoped>
article {
    text-align: left;
    margin: 1em;
    padding: 1em;
    border: 1px solid #eeeeee;
    border-radius: 0.8em;
}
h3 {
    color: darkgreen;
}
h6 {
    color: lightcoral;
}
a {
    padding-left: 1em;
}
</style>