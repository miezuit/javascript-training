import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

const About = {
    template: `<h1>Hello, welcome to my page!</h1>`
}

const MyAccount = {
    template: `<h1>This is your account.</h1>`
}

const Products = {
    template: `<h1>A list of products</h1>`
}

const User = {
    props: ['username'],
    template: `<div>User {{ $username }}</div>`
}

const NotFound = {
    template: `<div>Sorry! This page was not found.</div>`
}

const router = new VueRouter({
    routes: [
        { path: '/about', component: About },
        { path: '/myaccount', component: MyAccount },
        { path: '/products', component: Products },
        { path: '/user/:id', component: User, props: true  },
        { path: '*', component: NotFound }
    ]
})

let app = new Vue({
    el: '#app',
    router: router
})





