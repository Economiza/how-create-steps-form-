import { useStateMachine } from "little-state-machine"
import { UserAccountFormStepOne, UserAccountFormStepThree, UserAccountFormStepTwo } from "../typings/userTypings"
import { updateForm } from "../utils/updateForm"

export const useTryCreateAccount = () => {
    const { actions } = useStateMachine({updateForm})

    const tryCreateAccountStepOne = (form: UserAccountFormStepOne) => {
        actions.updateForm(form);
    }

    const tryCreateAccountStepTwo = (form: UserAccountFormStepTwo) => {
        actions.updateForm(form);
    }

    const tryCreateAccountStepThree = (form: UserAccountFormStepThree) => {
        actions.updateForm(form);
    }
    
    return { tryCreateAccountStepOne, tryCreateAccountStepTwo, tryCreateAccountStepThree}
}
    

