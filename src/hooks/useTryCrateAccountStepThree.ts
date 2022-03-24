import { useStateMachine } from "little-state-machine"
import { UserAccountFormStepThree } from "../typings/userTypings"
import { updateForm } from "../utils/updateForm"

export const useTryCreateAccountStepThree = () => {
    const { actions } = useStateMachine({updateForm})
    const tryCreateAccountStepThree = (form: UserAccountFormStepThree) => {
        actions.updateForm(form);
    }
    return { tryCreateAccountStepThree}
}