export interface UserAccountStepTwo {
    email: string
    password: string
    confirmPassword: string
}

export interface UserAccountStepOne {
    firstName: string
    lastName: string
    age: number
}

export interface UserAccount extends UserAccountStepOne {
    email: string
    password: string
}