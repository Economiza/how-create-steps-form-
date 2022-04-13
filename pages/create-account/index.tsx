import { FC } from "react"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import { FormStepOneContainer } from "../../src/FormStepOne"

const CreateAcccount: FC = () => {
    return <Container>
        <Header/> 
        <FormStepOneContainer/>
    </Container>
}

export default CreateAcccount