import Main from "@/components/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/components/pages/PostPage.vue";
import About from "@/components/pages/About.vue";
import PostIdPage from "@/components/PostIdPage.vue";
import LikesDislikes from "@/components/pages/LikesDislikes.vue";
import InputConnect from "@/components/pages/InputConnect.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/likes-dislikes',
        component: LikesDislikes
    },
    {
        path: '/input-connect',
        component: InputConnect
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;