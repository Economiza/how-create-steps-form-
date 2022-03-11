import { FC, ReactNode } from "react";
import { Text, TextProps } from "theme-ui";
import { colors } from "../../styles/colors";


export const Title: FC<TextProps> = ({children}) => {
    return <Text 
        sx={{ 
            color: colors.pink, 
            fontFamily: 'sans-serif', 
            fontWeight: 'bold',
            fontSize: '62px'
        }} >
            {children}
        </Text>
}