import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { UserAccountFormStepOne, UserAccountFormStepThree, UserAccountFormStepTwo } from "../typings/userTypings"
import { UserAccountStepOneValidationSchema, UserAccountStepThreeValidationSchema, UserAccountStepTwoValidationSchema } from "../utils/userAccountValidationSchema"
export const useUserAccountForm = () => {
    const useUserAccountFormStepTwo = () => {
        return useForm<UserAccountFormStepTwo>({
            mode: 'onBlur',
            resolver: yupResolver(UserAccountStepTwoValidationSchema)
        })
    }

    const useUserAccountFormStepOne = () => {
        return useForm<UserAccountFormStepOne>({
            mode: 'onBlur',
            resolver: yupResolver(UserAccountStepOneValidationSchema)
        })
    }
    
    const useUserAccountFormStepThree = () => {
        return useForm<UserAccountFormStepThree>({
            mode: 'onBlur',
            resolver: yupResolver(UserAccountStepThreeValidationSchema)
        })
    }

    return { useUserAccountFormStepOne, useUserAccountFormStepTwo, useUserAccountFormStepThree}
}