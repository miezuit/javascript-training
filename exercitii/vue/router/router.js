import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

const About = {
    template: `
        <h1>Hello, welcome to my website!</h1>
    `,
}

const MyAccount = {
    props: [ 'username' ],
    template: `
        <h1>Hello {{ username }}! This is your account.</h1>
    `
}

const Products = {
    template: `
        <h1>Here is the list of products.</h1>
    `
}

const NotFound = {
    template: `
        <h1>Sorry, the page {{ $route.fullPath }} was not found.</h1>
    `
}

const router = new VueRouter({
    routes: [
        { path: '/about', component: About },
        { path: '/account/:username', component: MyAccount, props: true },
        { path: '/products', component: Products },
        { path: '*', component: NotFound }
    ]
})

new Vue({
    el: '#app',
    router: router
})
