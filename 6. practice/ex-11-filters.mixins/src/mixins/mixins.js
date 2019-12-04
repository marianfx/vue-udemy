export const textMixin = {
    computed: {
      textWithLength2() {
        var value = this.text2;
        if (!value) return value;
        return value + " (" + value.length + ")";
      }
    }
}
