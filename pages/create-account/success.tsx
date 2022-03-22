import { useStateMachine } from "little-state-machine";
import { FC } from "react";
import { Flex, Text } from "theme-ui";
import { Card } from "../../src/components/Card";
import { Container } from "../../src/components/Container";
import { Header } from "../../src/components/Header";
import { Title } from "../../src/components/Title";
import { colors } from "../../styles/colors";

const Success: FC = () => {
    const { state } = useStateMachine()
    
    return <Container>
        <Header />
        <Card>
            <Title type="secondary" sx={{color: colors.green}}>Congratulations! Your account has been successfully created!</Title>
            <Text sx={{color: colors.white}}>
                First Name: {state.user.firstName}
            </Text>
            <Text sx={{color: colors.white}}>
                Last Name: {state.user.lastName}
            </Text>
            <Text sx={{color: colors.white}}>
                Age: {state.user.age}
            </Text>
            <Text sx={{color: colors.white}}>
                Email: {state.user.email}
            </Text>
            <Text sx={{color: colors.white}}>
                Password: {state.user.password}
            </Text>
        </Card>
    </Container>
}

export default Success