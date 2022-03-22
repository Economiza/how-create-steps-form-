import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useFormStepTwo } from "./hooks/useFormStepTwo";
import { useTryCreateAccountStepTwo } from "./hooks/useTryCreateAccountStepTwo";
import { UserAccountStepTwo } from "./typings/userTyping";

export const FormStepTwoContainer: FC = () => {
    const form = useFormStepTwo()

    return <FormProvider {...form}><FormStepTwo/></FormProvider>
}

const FormStepTwo: FC = () => {
    const {control, handleSubmit} = useFormContext<UserAccountStepTwo>()
    const router = useRouter()

    const {tryCreateAccountStepTwo} = useTryCreateAccountStepTwo()
    
    const submitStepTwoForm = (form: UserAccountStepTwo) => {
        tryCreateAccountStepTwo(form)
        redirectSuccessPage()
    }

    const redirectSuccessPage = () => {
        const createAccountPath = '/' + router.pathname.split('/')[1]        
        router.push(createAccountPath + '/success')
    }

    return <Card>
        <form onSubmit={handleSubmit(submitStepTwoForm)}>
    <Title type="secondary">Create Account</Title>
    <Box>
        <Controller 
            name="email"
            control={control}
            render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
            }) => ( 
            <Input 
                label="Email"  
                id={name} 
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur} 
                errorMessage={error?.message}/>
            )}/>
        <Controller 
            name="password"
            control={control}
            render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
            }) => ( 
            <Input 
                label="Password"
                type='password'  
                id={name} 
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur} 
                errorMessage={error?.message}/>
            )}/>
        <Controller 
            name="confirmPassword"
            control={control}
            render={({
                field: { onChange, onBlur, name },
                fieldState: { error },
            }) => ( 
            <Input 
                label="Confirm password"  
                id={name} 
                type='password'  
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur} 
                errorMessage={error?.message}/>
            )}/>
    </Box>
    <Button sx={{width: '100%'}}>Criar conta</Button>
    </form>
</Card>
}