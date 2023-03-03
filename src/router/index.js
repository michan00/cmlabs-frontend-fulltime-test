import { createWebHistory,createRouter} from "vue-router";
const routers =[
    {
        path: "/",
        name: "Gallery",
        component: Gallery
    }];

    const router=createRouter({
        history: createWebHistory(),
        routers,
    });

    export default router;