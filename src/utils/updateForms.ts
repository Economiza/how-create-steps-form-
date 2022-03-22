import { createStore, GlobalState } from "little-state-machine";
import { UserAccount, UserAccountStepOne, UserAccountStepTwo } from "../typings/userTyping";

declare module 'little-state-machine' {
    interface GlobalState {
        user: UserAccount
    }
}

const userAccount: UserAccount  = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: ''
}

createStore({user: userAccount});

export function updateFormState(globalState: GlobalState, payload: UserAccountStepOne | UserAccountStepTwo ){
    return {
        ...globalState,
        user: {
            ...globalState.user,
            ...payload
        }
    }
}