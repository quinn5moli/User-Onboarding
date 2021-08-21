import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name required')
        .min(5, 'Name must be at least 5 characters long'),
    email: yup
        .string()
        .email('Must be a valid E-mail')
        .required('E-mail Address required'),
    password: yup
        .string()
        .required('Password required')
        .min(5, 'Password must be at least 5 characters long'),
    terms: yup.boolean()
})

export default schema;