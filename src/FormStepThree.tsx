import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Box } from "theme-ui";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { useTryCreateAccount } from "./hooks/useTryCreateAccount";
import { useUserAccountForm } from "./hooks/useUserAccountForm";
import { UserAccountFormStepThree } from "./typings/userTypings";

export const FormStepThreeContainer: FC = () => {
    const {useUserAccountFormStepThree} = useUserAccountForm();
    const form = useUserAccountFormStepThree();
    return <FormProvider {...form}><FormStepThree/></FormProvider>
}

export const FormStepThree: FC = () => {
    const router = useRouter()
    const {control, handleSubmit} = useFormContext<UserAccountFormStepThree>();

    const redirectSuccessPage = () => {
        const createAccountPath = '/' + router.pathname.split('/')[1]        
        router.push(createAccountPath + '/success')
    }

    const { tryCreateAccountStepThree } = useTryCreateAccount();

    const submitForm = (form: UserAccountFormStepThree) => {
        tryCreateAccountStepThree(form);
        redirectSuccessPage();
        console.log("Foi")
    }

    return <Card>
    <Title type="secondary">Create Account</Title>
    <form onSubmit={handleSubmit(submitForm)}>
        <Box>
            <Controller 
                name="enrollment" 
                control={control  } 
                render={({field: {onChange, name, onBlur}, fieldState: {error}}) => 
                <Input name={name} 
                    label="Matricula" 
                    onChange={({target}) => onChange(target.value)} 
                    onBlur={onBlur} 
                    errorMessage={error?.message} 
                />}
            />
                        
            <Controller 
                name='period'
                control={control}
                render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
                <Input 
                    name={name}
                    label="Periodo"
                    onChange={event => onChange(event.target.value)} 
                    onBlur={onBlur}
                    errorMessage={error?.message}
                />
                }
            />
            <Controller 
                name='cra'
                control={control} 
                render={({field: {onChange, name, onBlur }, fieldState: {error}}) =>  
                <Input 
                    name={name}
                    label="Cra"
                    onChange={event => onChange(event.target.value)} 
                    onBlur={onBlur}
                    errorMessage={error?.message}
                />
                }
            />
        </Box>
        <Button sx={{width: '100%'}}>Criar conta</Button>
    </form>
    
    
</Card>
}