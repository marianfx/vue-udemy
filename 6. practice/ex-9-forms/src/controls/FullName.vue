<template>
    <div class="row">
        <div class="form-group col-xs-6">
        <label for="firstName">First Name</label>
        <input name="firstName" type="text" class="form-control" placeholder="First name" :value="firstStoreName" @input="onChange($event.target.value, 'first')">
        </div>
        <div class="form-group col-xs-6">
        <label for="lastName">Last Name</label>
        <input name="lastName" type="text" class="form-control" placeholder="Last name" :value="lastStoreName" @input="onChange($event.target.value, 'last')">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstStoreName: this.getFirstName(this.value),
            lastStoreName: this.getLastName(this.value)
        }
    },
    props: ['value'], // value = string, full name; use computed to produce formatted
    watch: {
        value() {
            this.firstStoreName = this.getFirstName(this.value);
            this.lastStoreName = this.getLastName(this.value);
        }
    },
    methods: {
        onChange(value, what) {
            if (what === 'first')
                this.firstStoreName = value;
            else 
                this.lastStoreName = value;

            let fullName = this.firstStoreName + ' ' + this.lastStoreName;
            console.log(fullName);
            this.$emit("input", fullName);
        },
        getFirstName(value){
            if (!value) return '';
            let splitted = value.split(' ');
            return splitted[0] ? splitted[0] : '';
        },
        getLastName(value) {
            if (!value) return '';
            let splitted = value.split(' ');
            if (splitted.length <= 1) return ''; 
            return splitted[splitted.length - 1] ? splitted[splitted.length - 1] : '';
        }
    }
}
</script>