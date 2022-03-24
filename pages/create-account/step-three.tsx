import { FC } from "react"
import { Container } from "../../src/components/Container"
import { Header } from "../../src/components/Header"
import { FormStepThreeContainer } from "../../src/FormStepThree"

const CreateAcccount: FC = () => {
    return <Container>
        <Header/> 
        <FormStepThreeContainer/>
    </Container>
}

export default CreateAcccount