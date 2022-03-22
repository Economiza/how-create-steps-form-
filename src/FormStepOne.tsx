import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useFormStepOne } from "./hooks/useFormStepOne";
import { useTryCreateAccountStepOne } from "./hooks/useTryCreateAccountStepOne";
import { UserAccountStepOne } from "./typings/userTyping";

export const FormStepOneContainer: FC = () => {
    const form = useFormStepOne()

    return <FormProvider {...form}><FormStepOne/></FormProvider>
}

const FormStepOne: FC = () => {
    const {control, handleSubmit} = useFormContext<UserAccountStepOne>()
    const router = useRouter()

    const {tryCreateAccountStepOne} = useTryCreateAccountStepOne()
    
    const submitStepOneForm = (form: UserAccountStepOne) => {
        tryCreateAccountStepOne(form)
        redirectCreateAccountStepTwo()
    }
    
    const redirectCreateAccountStepTwo = () => {
        const path = router.pathname
        router.push(path + '/step-two')
    }

    return <Card>
        <form onSubmit={handleSubmit(submitStepOneForm)}>
            <Title type="secondary">Create Account</Title>
            <Box>
                <Controller 
                    name="firstName"
                    control={control}
                    render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                    }) => ( 
                    <Input label="First Name"  
                        id={name} 
                        onChange={event => onChange(event.target.value)} 
                        onBlur={onBlur} 
                        errorMessage={error?.message}/>
                    )}/>
                <Controller 
                    name="lastName"
                    control={control}
                    render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                    }) => ( 
                    <Input 
                        label="Last Name"
                        id={name} 
                        onChange={event => onChange(event.target.value)} 
                        onBlur={onBlur} 
                        errorMessage={error?.message}/>
                    )}/>

                <Controller 
                    name="age"
                    control={control}
                    render={({
                        field: { onChange, onBlur, name },
                        fieldState: { error },
                    }) => (
                    <Input 
                        label="Age" 
                        id={name} 
                        onChange={event => onChange(event.target.value)} 
                        onBlur={onBlur} 
                        errorMessage={error?.message}/>
                    )}/>
            </Box>
            <Button sx={{width: '100%'}}>Continuar</Button>
        </form>
    </Card>
}