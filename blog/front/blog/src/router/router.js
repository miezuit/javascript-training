import VueRouter from 'vue-router'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import SignUpSuccess from '../components/SignUpSuccess'
import ViewPosts from '../components/ViewPosts'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/signup/success',
            component: SignUpSuccess
        },
        {
            path: '/posts/view',
            component: ViewPosts
        },
        {
            path: '/posts/add',
            component: AddPost
        },
        {
            path: '/posts/edit/:id',
            component: EditPost,
            props: true
        },
    ]
})