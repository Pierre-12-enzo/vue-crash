import { createRouter, createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import Jobviews from "@/views/jobviews.vue";
import NotFound from "@/views/NotFound.vue";
import singlejobview from "@/views/singlejobview.vue";
import addjob from "@/views/addjob.vue";
import Editjob from "@/views/Editjob.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeview,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobviews,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: singlejobview,
        },
        {
            path: '/job/add',
            name: 'addjob',
            component: addjob,
        },
        {
            path: '/jobs/edit/:id',
            name: 'Editjob',
            component: Editjob,
        },
        {
            path: '/:catchALL(.*)',
            name: 'not-found',
            component: NotFound,
        },
    ],
});



export default router;