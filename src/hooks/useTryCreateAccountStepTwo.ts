import { useStateMachine } from "little-state-machine";
import { UserAccountStepTwo } from "../typings/userTyping";
import { updateFormState } from "../utils/updateForms";

export const useTryCreateAccountStepTwo = () => {
    const {actions} = useStateMachine({ updateFormState });

    const tryCreateAccountStepTwo = (form: UserAccountStepTwo) => {
        actions.updateFormState(form)
    }

    return {tryCreateAccountStepTwo}
}