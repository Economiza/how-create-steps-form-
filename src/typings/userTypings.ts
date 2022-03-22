export interface UserAccountFormStepOne {
    firstName: string
    lastName: string
    age: number
}

export interface UserAccountFormStepTwo {
    email: string
    password: string
    confirmPassword: string
}

export interface UserAccountForm extends UserAccountFormStepOne, UserAccountFormStepTwo {}