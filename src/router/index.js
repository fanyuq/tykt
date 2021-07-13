import { createRouter,createWebHashHistory} from "vue-router";
const routes =[{
    path:'/login',
    component:()=>import('@/views/login')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
