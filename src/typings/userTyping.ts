interface UserAccountStepTwo {
    email: string
    password: string
    confirmPassword: string
}

interface UserAccountStepOne {
    firstName: string
    lastName: string
    age: number
}

interface UserAccount extends UserAccountStepOne {
    email: string
    password: string
}