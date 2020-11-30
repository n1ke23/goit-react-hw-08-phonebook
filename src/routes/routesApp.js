import { lazy } from 'react';

export default [
    // {
    //     path: '/',
    //     label: 'Home',
    //     exact: true,
    //     component: lazy(() => import('../Component/HomeView/HomeView.js')),
    //     private: false,
    //     restricted: false,
    // },
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./../Component/RegisterView/RegisterView')),
        private: false,
        restricted: true,
    },
    {
        path: '/login',
        label: 'Login',
        exact: false,
        component: lazy(() => import('./../Component/LoginView/LoginView')),
        private: false,
        restricted: true,
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./../Component/TodoList/TodoList')),
        private: true,
        restricted: false,
    },
];
