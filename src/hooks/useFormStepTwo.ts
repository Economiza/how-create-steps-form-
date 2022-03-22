import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserAccountStepTwo } from "../typings/userTyping";
import { stepTwoAccountValidationSchema } from "../utils/accountValidationSchema";

export const useFormStepTwo = () => {
    return useForm<UserAccountStepTwo>({
        mode: 'onBlur',
        resolver: yupResolver(stepTwoAccountValidationSchema)
      });
}