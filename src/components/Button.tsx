import { FC } from "react";
import { Button as ButtonTheme, ButtonProps } from "theme-ui";
import { colors } from "../../styles/colors";

export const Button: FC<ButtonProps> = ({sx, children, ...props}) => {
    return <ButtonTheme sx={{ backgroundColor: colors.aqua, color: colors.black, fontWeight: 'bold', cursor:'pointer', ...sx}} {...props}>{children}</ButtonTheme>
}