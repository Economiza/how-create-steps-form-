import { UserAccountStepOne } from "../typings/userTyping";

export const useTryCreateAccountStepOne = () => {
    const tryCreateAccountStepOne = (form: UserAccountStepOne) => {
        console.log(form);
    }
    return {tryCreateAccountStepOne}
}