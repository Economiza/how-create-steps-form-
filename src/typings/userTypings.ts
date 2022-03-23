
interface UserAccountFormStepOne {
    firstName: string,
    lastName: string,
    agr: number
}

interface UserAccountFormStepTwo {
    email: string,
    password: string,
    confirmPassword: string
}

interface UserAccountForm extends UserAccountFormStepOne, UserAccountFormStepTwo {}


export { UserAccountFormStepOne, UserAccountFormStepTwo, UserAccountForm }

