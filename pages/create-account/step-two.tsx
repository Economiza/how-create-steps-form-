import { FC } from "react"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import { FormStepTwoContainer } from "../../src/FormStepTwo"

const CreateAcccount: FC = () => {
    return <Container>
        <Header/> 
        <FormStepTwoContainer/>
    </Container>
}

export default CreateAcccount