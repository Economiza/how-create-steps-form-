import { useStateMachine } from "little-state-machine"
import { UserAccountFormStepOne } from "../typings/userTypings"
import { updateForm } from "../utils/updateForm"

export const useTryCreateAccountStepOne = () => {
    const { actions } = useStateMachine({updateForm})
    const tryCreateAccountStepOne = (form: UserAccountFormStepOne) => {
        actions.updateForm(form);
    }
    return { tryCreateAccountStepOne}
}