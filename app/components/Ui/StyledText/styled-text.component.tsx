import { Text } from "react-native";
import { ReactNode } from "react";
import { s } from "./styled-text.style";

type StyledTextProps = {
  children: ReactNode;
};

export const StyledText = ({ children }: StyledTextProps) => {
  return <Text style={[s.text]}>{children}</Text>;
};
