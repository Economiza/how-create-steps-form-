import { createStore, GlobalState } from "little-state-machine";
import { UserAccountForm, UserAccountFormStepOne, UserAccountFormStepThree, UserAccountFormStepTwo } from "../typings/userTypings";

declare module 'little-state-machine' {
    interface GlobalState {
        user: UserAccountForm
    }
}

const userAccount: UserAccountForm = {
    firstName: '',
    lastName: '',
    age: 0,
    email:'',
    password: '',
    confirmPassword: '',
    enrollment: 0,
    period: '',
    cra: 0
}

createStore({user: userAccount});

export function updateForm(globalState: GlobalState, paylod:UserAccountFormStepOne | UserAccountFormStepTwo | UserAccountFormStepThree){
    return {
        ...globalState,
        user:{
            ...globalState.user,       
            ...paylod
        }
    }

}
