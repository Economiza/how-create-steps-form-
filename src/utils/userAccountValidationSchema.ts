import * as yup from 'yup'

export const userAccounStepOnetValidationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    age: yup.number()
        .required('Age is required')
        .min(18, 'You must be 18 years old or above')
        .typeError('Age is required')
})

export const userAccounStepTwotValidationSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(8, 'Password shold be 8 chars minimum'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must be equals')   

})