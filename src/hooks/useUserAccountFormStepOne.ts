import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { userAccounStepOnetValidationSchema } from "../utils/userAccountValidationSchema"
import { UserAccountFormStepOne } from "../typings/userTypings"

export const useUserAccountFormStepOne = () => {
    return useForm<UserAccountFormStepOne>({
        mode: 'onBlur',
        resolver: yupResolver(userAccounStepOnetValidationSchema)
    })
}