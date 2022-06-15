import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import first from '@/components/first'
import second from "@/components/second"
import third from "@/components/third"

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //         path: '/',
        //         name: 'HelloWorld',
        //         component: HelloWorld
        //     },
        {
            path: '/',
            name: 'first',
            component: first
        }, {
            path: '/second',
            name: 'second',
            component: second
        }, {
            path: '/third',
            name: 'third',
            component: third
        }
    ]
})