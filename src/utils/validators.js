export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const isCurrency = value => {
    const regex = RegExp(/^(\s*|\d + (\.\d{ 2 })?$)/);
    if (!regex.test(value)) {
        return 'Numbers only';
    }
}
export const isCommaDelimited = value => {
    const regex = RegExp(/^(\s*|(\S+)(,\s*\S+)*)?$/);
    if (!regex.test(value)) {
        return 'Separate with comma and space';
    }
}
export const isEmail = value => {
    const regex = RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/);
    if (!regex.test(value)) {
        return 'Enter an email address';
    }
}
export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';