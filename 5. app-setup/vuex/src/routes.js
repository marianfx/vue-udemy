import HomeComponent from './components/Home.vue';
import HeaderComponent from './components/Header.vue';

/// userGroup is specified only if need to load all these in the same bundle
const UserComponent = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'userGroup');
}

const UserStartComponent = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'userGroup');
}

const UserDetailComponent = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'userGroup');
}

const UserEditComponent = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'userGroup');
}

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