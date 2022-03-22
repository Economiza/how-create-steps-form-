import { UserAccountStepOne, UserAccountStepTwo } from "../typings/userTyping";

export const useTryCreateAccountStepTwo = () => {
    const tryCreateAccountStepTwo = (form: UserAccountStepTwo) => {
        console.log(form);
    }
    return {tryCreateAccountStepTwo}
}