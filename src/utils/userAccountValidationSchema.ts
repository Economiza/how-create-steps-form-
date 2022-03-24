import * as yup from 'yup'

export const UserAccountStepOneValidationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    age: yup.number().required().min(18, "You must be 18 years old or above"),
})

export const UserAccountStepTwoValidationSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required").min(8,"Password must have at least 8 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Password must be equals")
})

export const UserAccountStepThreeValidationSchema = yup.object({
    enrollment: yup.number().required("Matricula is required"),
    period: yup.string().required("Periodo is required"),
    cra: yup.number().required("CRA is required").min(0, "CRA must be higher than 0").max(10, "CRA cannot be higher than 10"),
})

