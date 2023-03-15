export const required = (value:string) => value ? undefined : 'Required'

export const maxLength = (max: number) => (value:string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const email = (value: string) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined
};


/*

const validators= (values: any) => {
    const errors = {}
    const requiredFields = [
        'login',
        'password'

    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}*/
