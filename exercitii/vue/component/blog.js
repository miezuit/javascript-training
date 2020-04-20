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
    template: '<button @click="click">You clicked me {{ clicks }} times</button>',
    // datele trebuie returnate dintr-o metoda denumita data (data este o metoda in componente)
    data() {
        return {
            clicks: 0
        }
    },
    methods: {
        click() {
            this.clicks++;
            $emit('counter-clicked', this.click);
        }
    }
});

var app = new Vue({
    el: '#app',
});