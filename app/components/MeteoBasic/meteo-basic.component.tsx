import { Fragment } from "react";
import { View, Image } from "react-native";
import { StyledText } from "../Ui/StyledText/styled-text.component";

// type Props = {};

export const MeteoBasic = () => {
  return (
    <Fragment key="Meteo-Basic">
      <View>
        <StyledText>Clock</StyledText>
      </View>
      <StyledText>City</StyledText>
      <StyledText>Label</StyledText>
      <View>
        <StyledText>3</StyledText>
      </View>
    </Fragment>
  );
};
