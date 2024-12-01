export type WEATHER_INTERPRATIONS_TYPE = {
  codes: number[];
  label: string;
  image: any;
};

export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Ensoleillé",
    image: require("../assets/images/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("../assets/images/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Pluvieux",
    image: require("../assets/images/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Neigeux",
    image: require("../assets/images/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Orageux",
    image: require("../assets/images/thunder.png"),
  },
];

export function getWeatherInterpration(code: number) {
  const interpration = WEATHER_INTERPRATIONS.find((interpration) =>
    interpration.codes.includes(code)
  );
  return interpration;
}
