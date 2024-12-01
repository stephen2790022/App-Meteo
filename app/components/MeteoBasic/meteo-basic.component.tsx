import { Fragment } from "react";
import { View, Image } from "react-native";
import { StyledText } from "../Ui/StyledText/styled-text.component";
import { s } from "./meteo-basic.style";
import { WEATHER_INTERPRATIONS_TYPE } from "@/app/meteo-service";

type Props = {
  currentTemperature: number;
  interpretation?: WEATHER_INTERPRATIONS_TYPE;
};

export const MeteoBasic = ({ currentTemperature }: Props) => {
  return (
    <Fragment key="Meteo-Basic">
      <View style={s.clock}>
        <StyledText>Clock</StyledText>
      </View>
      <StyledText>City</StyledText>
      <StyledText customStyle={s.weatherLabel}>Label</StyledText>
      <View style={s.temperatureContainer}>
        <StyledText customStyle={s.temperature}>
          {currentTemperature}
        </StyledText>
        <Image style={s.image} />
      </View>
    </Fragment>
  );
};
