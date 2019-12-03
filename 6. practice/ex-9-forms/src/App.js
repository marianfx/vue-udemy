import FullNameControl from './controls/FullName.vue'

export default {
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                fullName: 'Alexander X',
                email: '',
                password: '',
                storeData: "no"
            },
            submitted: false
        }
    },
    methods: {
        submit() {
            this.submitted = true;
        }
    },
    components: {
        'app-control-fullname': FullNameControl
    }
}