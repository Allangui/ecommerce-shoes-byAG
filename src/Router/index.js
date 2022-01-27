import * as VueRouter from 'vue-router'

//Pages
import HomePage from '../pages/Home.vue'

const MenPage = () => import('../pages/Men.vue')
const WomenPage = () => import('../pages/Women.vue')
const AboutPage = () => import('../pages/About.vue')
const ContactPage = () => import('../pages/Contact.vue')

const router = VueRouter.createRouter({
    history : VueRouter.createWebHistory(),
    routes: [
        {
            path:'/',
            alias:'/home',
            name:'Home',
            component: HomePage
        },
        {
            path:'/Men',
            name:'Men',
            component: MenPage
        },
        {
            path:'/Women',
            name:'Women',
            component: WomenPage
        },
        {
            path:'/About',
            name:'About',
            component: AboutPage
        },
        {
            path:'/Contact',
            name:'Contact',
            component: ContactPage
        },
    ],
})

export default router