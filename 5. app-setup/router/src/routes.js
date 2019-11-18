import UserComponent from './components/user/User.vue';
import UserStartComponent from './components/user/UserStart.vue';
import UserDetailComponent from './components/user/UserDetail.vue';
import UserEditComponent from './components/user/UserEdit.vue';
import HomeComponent from './components/Home.vue';
import HeaderComponent from './components/Header.vue';

export const routes = [
    {
        path: '',
        components: {
            default: HomeComponent,
            'header-top': HeaderComponent
        }
    },
    {
        path: '/user',
        components: {
            default: UserComponent,
            'header-bottom': HeaderComponent
        },
        children: [
            // not use slash, as it's appended on ROOT
            { path: '', component: UserStartComponent },
            { 
                path: ':id', 
                component: UserDetailComponent, 
                props: true,
                beforeEnter: (to, from, next) => {
                    // global gets executed before this
                    console.log("Before: User Detail");
                    next();
                }
             },
            { path: ':id/edit', component: UserEditComponent, props: true, name: 'userEdit' },
        ]
    },
    {
        path: '/redirect-me',
        redirect: '/user'
    },
    { 
        // catch all routes that are not handled up until this point
        path: '*', redirect: '/'
    }
];