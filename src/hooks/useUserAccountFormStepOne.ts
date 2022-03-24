import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { UserAccountFormStepOne } from "../typings/userTypings"
import { UserAccountStepOneValidationSchema } from "../utils/userAccountValidationSchema"
export const useUserAccountFormStepOne = () => {
    return useForm<UserAccountFormStepOne>({
        mode: 'onBlur',
        resolver: yupResolver(UserAccountStepOneValidationSchema)
    })
}