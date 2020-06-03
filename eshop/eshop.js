
import "https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js"

class User {
    constructor(email, password) {
        this.email = email
        this.hashedPassword = sha1(password)
        this.isLoggedIn = false
        this.cart = null
    }
    login(password) {
        if (this.hashedPassword !== sha1(password)) {
            return false
        }
        this.isLoggedIn = true
        if (!this.cart) {
            this.cart = new ShoppingCart()
        }
    }
}

class Users {
    constructor() {
        this.users = []
    }
    searchUserWithEmail(email) {
        this.users.find(user => user.email === email)
    }
    userExists(email) {
        return this.users.some(user => user.email === email)
    }
    signUp(email, password) {
        if (this.userExists(email)) {
            throw new Error('User already exists')
        }
        let newUser = new User(email, password)
        this.users.push(newUser)
    }
}

class ShoppingCart {
    constructor() {
        this.products = []
    }
    add(product) {
        this.products.push(product)
    }
    remove(productIndex) {
        this.products.splice(productIndex, 1)
    }
    calculateTotalPrice() {
        return this.products.reduce((product, price) => product.price + price, 0)
    }
    checkout() {
        // todo
    }
}

class Session {
    constructor(users) {
        this.users = users
        this.loggedUser = null
    }
    login(email, password) {
        if (!this.users.userExists(email)) {
            throw new Error('Login failed')
        }
        let user = this.users.searchUserWithEmail(email)
        if (!user.login(password)) {
            throw new Error('Login failed')
        }
        this.loggedUser = user
    }
    logout() {
        this.user.logout()
        this.loggedUser = null
    }
}

class ProductCatalog {
    constructor() {
        this.products = []
    }
    addProduct(product) {
        this.products.push(product)
    }
}

class Product {
    constructor(code, name, price, description, image) {
        this.code = code
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }
}

new Vue({
    el: '#app',
    data: () => {
        let users = new Users()
        users.add(new User('admin', 'test123'))
        let session = new Session(this.users)
        let catalog = new ProductCatalog()
        catalog.add(new Product(1, 'VueJS Basic', 0, 'https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg'))
        catalog.add(new Product(2, 'VueJS Intermediate', 10, 'https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg'))
        catalog.add(new Product(3, 'VueJS Advanced', 20, 'https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg'))    
        return {
            users,
            session,
            catalog
        }
    },
    template: ``,
    methods: {
        
    },
    computed: {
        
    },
})