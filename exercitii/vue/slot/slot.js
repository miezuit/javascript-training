import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

Vue.component('my-link', {
    template: `
    <a :href="url">
        <slot></slot>
    </a>
    `,
    props: ['url']
});

let app = new Vue({
    el: '#app'
});