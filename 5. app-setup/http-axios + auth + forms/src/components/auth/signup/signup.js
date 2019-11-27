import axios from './../../../axios-auth';
import { required, email } from 'vuelidate/lib/validators'

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
        email: { // name is important !
            required: required, // first name could be anything
            email: email
        }
    }
}