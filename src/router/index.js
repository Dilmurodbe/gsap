import {createRouter , createWebHistory} from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: '/',
        component: () => import('@/components/HelloWorld.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
