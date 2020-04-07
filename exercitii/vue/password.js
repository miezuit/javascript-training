var app = new Vue({
    el: '#app', 
    data: {     
        password: "",
        score: 0,
        message: "very weak",
        messages: [
            "very weak",
            "very weak",
            "weak",
            "medium",
            "strong",
            "very strong"
        ]
    },
    methods: {
        evaluateScore: function() {
           this.score = [
             this.hasSmallLetter,
             this.hasUpperLetter,
             this.hasDigit,
             this.hasSpecialChar,
             this.isLongEnough
            ].reduce((acc, func) => acc + func(), 0);
            this.message = this.messages[this.score];
        },
        hasSmallLetter: function() {
            return /[a-z]/.test(this.password);
        },
        hasUpperLetter: function() {
            return /[A-Z]/.test(this.password);
        },
        hasDigit: function() {
            return /[0-9]/.test(this.password);
        },
        hasSpecialChar: function() {
            return /[^A-Za-z0-9]/.test(this.password);
        },
        isLongEnough: function() {
            return this.password.length >= 8;
        }
    }
});