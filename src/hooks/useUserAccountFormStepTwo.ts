import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { userAccounStepTwotValidationSchema } from "../utils/userAccountValidationSchema"
import { UserAccountFormStepTwo } from "../typings/userTypings"

export const useUserAccountFormStepTwo = () => {
    return useForm<UserAccountFormStepTwo>({
        mode: 'onBlur',
        resolver: yupResolver(userAccounStepTwotValidationSchema)
    })
}