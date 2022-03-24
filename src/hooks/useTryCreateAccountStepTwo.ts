import { useStateMachine } from "little-state-machine"
import { UserAccountFormStepTwo } from "../typings/userTypings"
import { updateForm } from "../utils/updateForm"

export const useTryCreateAccountStepTwo = () => {
    const { actions } = useStateMachine({updateForm})
    const tryCreateAccountStepTwo = (form: UserAccountFormStepTwo) => {
        actions.updateForm(form);
    }
    return { tryCreateAccountStepTwo}
}