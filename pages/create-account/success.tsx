import { useStateMachine } from "little-state-machine";
import { FC } from "react";
import { Text } from "theme-ui";
import { Card } from "../../src/components/Card";
import { Container } from "../../src/components/Container";
import { Header } from "../../src/components/Header";
import { Title } from "../../src/components/Title";
import { colors } from "../../styles/colors";

const Success: FC = () => {
    const {state} = useStateMachine();

    let keys: string[] = [];
    for(const key in state.user){
        keys.push(key);
    }
    return <Container>
        <Header />
        <Card>
            <Title type="secondary" sx={{color: colors.green}}>Congratulations! Your account has been successfully created!</Title>
            {keys.map((key) => 
                <Text key={key} sx={{color: colors.white}}>
                    {key}: {state.user[key]}
                </Text>
            )}
        </Card>
    </Container>
}

export default Success