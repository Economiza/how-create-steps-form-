import { useForm } from "react-hook-form";

export const useFormStepOne = () => {
    return useForm<UserAccountStepOne>({
        mode: 'onBlur',
      });
}