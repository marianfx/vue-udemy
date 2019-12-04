export const reversed = (value) => {
    if (!value) return value;
    return value.split('').reverse().join('');
}

export const withLength = (value) => {
    if (!value) return value;
    return value + " (" + value.length + ")";
}