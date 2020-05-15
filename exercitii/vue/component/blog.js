Vue.component('hello', {
    // template-ul (html-ul) componentei
    template: `<div>
                 <h3>{{ text }}</h3>
                 <span></span>
               </div>
               `,
    // proprietatile componentei (pot fi transmise din exterior)
    props: [
        'text'
    ]
});

Vue.component('button-counter', {
    template: `
        <button @click="handleClick">
            You clicked me {{ clicks }} times
        </button>`,
     data() {
        return {
            clicks: 0
        }
    },
    methods: {
        handleClick() {
            this.clicks++;
        }
    }
})

var app = new Vue({
    el: '#app',
});