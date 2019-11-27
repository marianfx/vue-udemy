import axios from './../../../axios-auth';
import { required, email, numeric, minValue, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            email: '',
            age: null,
            password: '',
            confirmPassword: '',
            country: 'usa',
            hobbyInputs: [],
            terms: false
        }
    },
    methods: {
        onAddHobby() {
            const newHobby = {
                id: Math.random() * Math.random() * 1000,
                value: ''
            }
            this.hobbyInputs.push(newHobby)
        },
        onDeleteHobby(id) {
            this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
        },
        onSubmit() {
            const formData = {
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                country: this.country,
                hobbies: this.hobbyInputs.map(hobby => hobby.value),
                terms: this.terms
            }
            console.log(formData)

            // Note: Promises, not like observables, call the server immediately
            this.$store.dispatch('signUp', formData);
        }
    },
    validations: {
        email: { // name is important, because it binds to data property named 'email' !
            required: required, // first name could be anything
            email: email
        },
        age: {
            required: required,
            numeric: numeric,
            minValue: minValue(18)
        },
        password: {
            required, 
            minLength: minLength(6)
        },
        confirmPassword: {
            // sameAs: sameAs('password') // same as property in vue instance
            sameAs: sameAs(vm => {
                return vm.password;
            })
        }
    }
}