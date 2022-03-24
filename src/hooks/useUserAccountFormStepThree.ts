import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { UserAccountFormStepThree } from "../typings/userTypings"
import { UserAccountStepThreeValidationSchema } from "../utils/userAccountValidationSchema"
export const useUserAccountFormStepThree = () => {
    return useForm<UserAccountFormStepThree>({
        mode: 'onBlur',
        resolver: yupResolver(UserAccountStepThreeValidationSchema)
    })
}