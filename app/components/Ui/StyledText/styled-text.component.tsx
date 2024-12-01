import { Text } from "react-native";
import { ReactNode } from "react";
import { s } from "./styled-text.style";

type StyledTextProps = {
  children: ReactNode;
  customStyle?: object;
};

export const StyledText = ({ children, customStyle }: StyledTextProps) => {
  return <Text style={[s.text, customStyle]}>{children}</Text>;
};
