import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useTryCreateAccountStepOne } from "./hooks/useTryCreateAccountStepOne";
import { useUserAccountFormStepOne } from "./hooks/useUserAccountFormStepOne";
import { UserAccountFormStepOne } from "./typings/userTypings";

export const FormStepOneContainer: FC = () => {
    const form = useUserAccountFormStepOne();
    return <FormProvider {...form}><FormStepOne/></FormProvider>
}

export const FormStepOne: FC = () => {
    const router = useRouter()
    const {control, handleSubmit} = useFormContext<UserAccountFormStepOne>();

    const redirectCreateAccountStepTwo = () => {
        const path = router.pathname
        router.push(path + '/step-two')
    }
    
    const {tryCreateAccountStepOne} = useTryCreateAccountStepOne();

    const submitForm = (form: UserAccountFormStepOne) => {
        tryCreateAccountStepOne(form);
        redirectCreateAccountStepTwo();
    }

    return <Card>
        <form onSubmit={handleSubmit(submitForm)}>
            <Title type="secondary">Create Account</Title>
            <Box>
                <Controller name="firstName" control={control  } render={({field: {onChange, name, onBlur}, fieldState: {error}}) => 
                    <Input name={name} label="First Name" onChange={({target}) => onChange(target.value)} onBlur={onBlur} errorMessage={error?.message} />}/>
                     
                <Controller 
            name='lastName'
            control={control}
            render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
            <Input 
                name={name}
                label="Last Name"
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur}
                errorMessage={error?.message}
            />
            }/>
         <Controller 
            name='age'
            control={control} 
            render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
            <Input 
                name={name}
                label="Age"
                onChange={event => onChange(event.target.value)} 
                onBlur={onBlur}
                errorMessage={error?.message}
            />
            }/>
            </Box>
            <Button sx={{width: '100%'}}>Continuar</Button>
        </form> 
</Card>
}