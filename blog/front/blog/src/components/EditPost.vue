<template>
    <PageTemplate>
        <form>
            <h2>Edit post</h2>
            <label for="title">Title</label>
            <input class="form-control" type="text" name="title" id="title" v-model="title">
            <label for="content">Content</label>
            <textarea class="form-control" name="content" id="content" cols="60" rows="10" v-model="content"></textarea>
            <input class="btn btn-success" type="button" value="Update" @click="update">
        </form>
    </PageTemplate>
</template>

<script>
import axios from 'axios'
import PageTemplate from './PageTemplate'

export default {
    components: { PageTemplate },
    props: ['id'],
    data() {
        return {
            title: null,
            content: null
        }
    },
    methods: {
        update() {
            axios
                .put(
                    'http://localhost:8080/posts/' + this.id,
                    {
                        title: this.title,
                        content: this.content
                    },
                    {
                        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
                    }
                )
                .then(() => this.$router.push('/posts/view'))
                .catch(err => console.log(err))
        },
        initPostData() {
            axios
                .get(
                    'http://localhost:8080/posts/' + this.id,
                    {
                        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
                    }
                )
                .then(resp => {
                    this.title = resp.data.title
                    this.content = resp.data.content
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.initPostData()
    },
}
</script>