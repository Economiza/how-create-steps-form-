import { useStateMachine } from "little-state-machine";
import { UserAccountStepOne } from "../typings/userTyping";
import { updateFormState } from "../utils/updateForms";

export const useTryCreateAccountStepOne = () => {
    const {actions} = useStateMachine({ updateFormState });

    const tryCreateAccountStepOne = (form: UserAccountStepOne) => {
        actions.updateFormState(form)
    }

    return {tryCreateAccountStepOne}
}