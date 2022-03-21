import { useForm } from "react-hook-form";

export const useFormStepOne = () => {
    return useForm<UserAccountStepTwo>({
        mode: 'onBlur',
      });
}