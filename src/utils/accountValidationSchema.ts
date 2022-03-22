import * as yup from 'yup';

export const stepOneAccountValidationSchema = yup.object({
    firstName: yup.string().required('First name required'),
    lastName: yup.string().required('Last name required'),
    age: yup
        .number()
        .typeError('Amount must be a number')
        .required('Age is required')
        .min(18, 'You must be 18 yeares old or above')
        .max(100, 'Invalid age')
})

export const stepTwoAccountValidationSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required')
        .min(8, 'Password shold be 8 chars minimum'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must be equals')
})