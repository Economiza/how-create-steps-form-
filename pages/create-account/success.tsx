import { FC } from "react";
import { Flex, Text } from "theme-ui";
import { Card } from "../../src/components/Card";
import { Container } from "../../src/components/Container";
import { Header } from "../../src/components/Header";
import { Title } from "../../src/components/Title";
import { colors } from "../../styles/colors";

const Success: FC = () => {
    const userAccountData = {
        firstName: 'Sheilla',
        lastName: 'Silva',
        age: '18',
        email: 'sheilla.silva@test.com',
        password: '123456',
    }

    return <Container>
        <Header />
        <Card>
            <Title type="secondary" sx={{color: colors.green}}>Congratulations! Your account has been successfully created!</Title>
            <Text sx={{color: colors.white}}>
                First Name: {userAccountData.firstName}
            </Text>
            <Text sx={{color: colors.white}}>
                Last Name: {userAccountData.lastName}
            </Text>
            <Text sx={{color: colors.white}}>
                Age: {userAccountData.age}
            </Text>
            <Text sx={{color: colors.white}}>
                Email: {userAccountData.email}
            </Text>
            <Text sx={{color: colors.white}}>
                Password: {userAccountData.password}
            </Text>
        </Card>
    </Container>
}

export default Success