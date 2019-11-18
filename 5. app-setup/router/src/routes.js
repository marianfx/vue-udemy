import UserComponent from './components/user/User.vue';
import HomeComponent from './components/Home.vue';

export const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/user/:id',
        component: UserComponent,
        props: true // tells it to pass arguments as props
        // props: { object / function that returns object }
    }
];