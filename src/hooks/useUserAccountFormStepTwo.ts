import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { UserAccountFormStepTwo } from "../typings/userTypings"
import { UserAccountStepTwoValidationSchema } from "../utils/userAccountValidationSchema"
export const useUserAccountFormStepTwo = () => {
    return useForm<UserAccountFormStepTwo>({
        mode: 'onBlur',
        resolver: yupResolver(UserAccountStepTwoValidationSchema)
    })
}