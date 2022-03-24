import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useTryCreateAccountStepTwo } from "./hooks/useTryCreateAccountStepTwo";
import { useUserAccountFormStepTwo } from "./hooks/useUserAccountFormStepTwo";
import { UserAccountFormStepTwo } from "./typings/userTypings";

export const FormStepTwoContainer: FC = () => {
    const form = useUserAccountFormStepTwo();
    return <FormProvider {...form}><FormStepTwo/></FormProvider>
}

export const FormStepTwo: FC = () => {
    const router = useRouter()
    const {control, handleSubmit} = useFormContext<UserAccountFormStepTwo>();

    const redirectCreateAccountStepThree = () => {
        router.push('./step-three')
    }
    
    const { tryCreateAccountStepTwo } = useTryCreateAccountStepTwo();

    const submitForm = (form: UserAccountFormStepTwo) => {
        tryCreateAccountStepTwo(form);
        redirectCreateAccountStepThree();
    }

    return <Card>
    
    <form onSubmit={handleSubmit(submitForm)}>
    <Title type="secondary">Create Account</Title>
    <Box>
    <Controller name="email" control={control  } render={({field: {onChange, name, onBlur}, fieldState: {error}}) => 
                    <Input name={name} label="Email" onChange={({target}) => onChange(target.value)} onBlur={onBlur} errorMessage={error?.message} />}/>
                     
                <Controller 
            name='password'
            control={control}
            render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
            <Input 
                name={name}
                label="Password"
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur}
                errorMessage={error?.message}
            />
            }/>
         <Controller 
            name='confirmPassword'
            control={control} 
            render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
            <Input 
                name={name}
                label="Confirm password"
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur}
                errorMessage={error?.message}
            />
            }/>
    </Box>
    <Button sx={{width: '100%'}}>Criar conta</Button>
    </form>
    
    
    </Card>
}