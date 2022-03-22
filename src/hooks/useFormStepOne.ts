import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { stepOneAccountValidationSchema } from "../utils/accountValidationSchema";
import { UserAccountStepOne } from "../typings/userTyping";

export const useFormStepOne = () => {
    return useForm<UserAccountStepOne>({
        mode: 'onBlur',
        resolver: yupResolver(stepOneAccountValidationSchema)
      });
}