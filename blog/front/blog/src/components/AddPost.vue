<template>
    <PageTemplate>
        <form>
            <h2>Add a new post</h2>
            <label for="title">Title</label>
            <input class="form-control" type="text" name="title" id="title" v-model="title">
            <label for="content">Content</label>
            <textarea class="form-control" name="content" id="content" cols="60" rows="10"  v-model="content"></textarea>
            <input class="btn btn-success" type="button" value="Add" @click="add">
        </form>
    </PageTemplate>
</template>

<script>
import axios from 'axios'
import PageTemplate from './PageTemplate'

export default {
    components: { PageTemplate },
    data() {
        return {
            title: null,
            content: null
        }
    },
    methods: {
        add() {
            axios
                .post(
                    'http://localhost:8080/posts',
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
        }
    },
}
</script>