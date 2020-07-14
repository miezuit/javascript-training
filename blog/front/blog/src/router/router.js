import VueRouter from 'vue-router'
import SignUpForm from '../components/SignUpForm'
import SuccessfulSignUp from '../components/SuccessfulSignUp'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/signup'
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpForm,
        },
        {
            path: '/signup/success',
            name: 'signup_success',
            component: SuccessfulSignUp,
        }
    ]
})