import VueRouter from 'vue-router'
import SignUpForm from '../components/SignUpForm'
import SuccessfulSignUp from '../components/SuccessfulSignUp'
import Login from '../components/Login'
import ViewPosts from '../components/ViewPosts'
import AddPost from '../components/AddPost'

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
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/posts/view',
            name: 'posts',
            component: ViewPosts,
        },
        {
            path: '/posts/add',
            name: 'postsadd',
            component: AddPost,
        },
    ]
})