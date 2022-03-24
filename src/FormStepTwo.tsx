import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useUserAccountFormStepTwo } from "./hooks/useUserAccountFormStepTwo";
import { UserAccountFormStepTwo } from "./typings/userTypings";

export const FormStepTwoContainer: FC = () => {
    const form = useUserAccountFormStepTwo();
    return <FormProvider {...form}><FormStepTwo/></FormProvider>
}

export const FormStepTwo: FC = () => {
    const router = useRouter()
    const {control, handleSubmit} = useFormContext<UserAccountFormStepTwo>();

    const redirectSuccessPage = () => {
        const createAccountPath = '/' + router.pathname.split('/')[1]        
        router.push(createAccountPath + '/success')
    }

    const tryCreateAccountStepOne = (form: UserAccountFormStepTwo) => console.log(form);

    const submitForm = (form: UserAccountFormStepTwo) => {
        tryCreateAccountStepOne(form);
        redirectSuccessPage();
    }

    return <Card>
    <Title type="secondary">Create Account</Title>
    <form onSubmit={handleSubmit(submitForm)}>
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
    </form>
    
    <Button sx={{width: '100%'}} onClick={redirectSuccessPage}>Criar conta</Button>
</Card>
}