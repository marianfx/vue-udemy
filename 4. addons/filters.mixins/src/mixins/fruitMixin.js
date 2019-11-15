export const fruitMixin = {
    data() {
        return {
            filterText: '',
            fruits: ['Apple', 'Banana', 'Mango']
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        }
    },
    // One instance per each import (so unique)
    created() {
      console.log("fruitMixin: created");
    }
};