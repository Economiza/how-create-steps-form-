import { FC } from "react"
import { Box, Flex } from "theme-ui"
import { Container } from "../../src/components/Container"
import { Input } from "../../src/components/Input"
import { colors } from "../../styles/colors"

const CreateAcccount: FC = () => {
    return <Container>
        <Flex sx={{ width: '50vw', height: '50vh', alignItems: 'center', justifyContent: 'center',backgroundColor: '#282828', borderRadius: '8px'}}>
            <Input label="User Name" errorMessage="Nome do usuário está incorreto"/>
        </Flex>
    </Container>
}

export default CreateAcccount