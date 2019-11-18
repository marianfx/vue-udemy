import UserComponent from './components/user/User.vue';
import UserStartComponent from './components/user/UserStart.vue';
import UserDetailComponent from './components/user/UserDetail.vue';
import UserEditComponent from './components/user/UserEdit.vue';
import HomeComponent from './components/Home.vue';

export const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/user',
        component: UserComponent,
        children: [
            // not use slash, as it's appended on ROOT
            { path: '', component: UserStartComponent },
            { path: ':id', component: UserDetailComponent, props: true },
            { path: ':id/edit', component: UserEditComponent, props: true, name: 'userEdit' },
        ]
    }
];