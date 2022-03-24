
interface UserAccountFormStepOne {
    firstName: string,
    lastName: string,
    age: number
}

interface UserAccountFormStepTwo {
    email: string,
    password: string,
    confirmPassword: string
}

interface UserAccountFormStepThree {
    enrollment: number,
    period: string,
    cra: number
}

interface UserAccountForm extends UserAccountFormStepOne, UserAccountFormStepTwo, UserAccountFormStepThree {}


export { UserAccountFormStepOne, UserAccountFormStepTwo, UserAccountForm, UserAccountFormStepThree }

