import { Fragment } from "react";
import { View, Image } from "react-native";
import { StyledText } from "../Ui/StyledText/styled-text.component";
import { s } from "./meteo-basic.style";
import { WEATHER_INTERPRATIONS_TYPE } from "@/app/meteo-service";
import { DigitalClock } from "../Clock/clock.component";

type Props = {
  currentTemperature: number;
  interpretation?: WEATHER_INTERPRATIONS_TYPE;
};

export const MeteoBasic = ({ currentTemperature, interpretation }: Props) => {
  const image = interpretation?.image;
  return (
    <Fragment key="Meteo-Basic">
      <View style={s.clock}>
        <DigitalClock />
      </View>
      <StyledText>City</StyledText>
      <StyledText customStyle={s.weatherLabel}>
        {interpretation?.label}
      </StyledText>
      <View style={s.temperatureContainer}>
        <StyledText customStyle={s.temperature}>
          {currentTemperature}
        </StyledText>
        <Image style={s.image} source={image} />
      </View>
    </Fragment>
  );
};
