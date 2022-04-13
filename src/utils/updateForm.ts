import { createStore, GlobalState } from "little-state-machine"
import { UserAccountForm, UserAccountFormStepOne, UserAccountFormStepTwo } from "../typings/userTypings"

declare module 'little-state-machine' {
    interface GlobalState {
        user: UserAccountForm
    }
}

const userAccount: UserAccountForm = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: ''
}

createStore({user: userAccount})

export const updateForm = (globalState: GlobalState, payload: UserAccountFormStepOne | UserAccountFormStepTwo) => {
    return {
        ...globalState,
        user: {
            ...globalState.user,
            ...payload
        }
    }
}
