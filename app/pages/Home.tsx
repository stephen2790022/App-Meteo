import { Fragment, useEffect, useState } from "react";
import { View, Text } from "react-native";
import s from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { meteoApi } from "../endPoints";

type LocationType = {
  latitude: number;
  longitude: number;
};
const Home = () => {
  const defaultLocation = {
    latitude: 35.64976140071828,
    longitude: 139.91252522559532,
  };
  const [currentLocation, setCurrentLocation] =
    useState<LocationType>(defaultLocation);
  const [weatherData, setWeatherData] = useState<any>();

  const [getWether, { isLoading }] =
    meteoApi.endpoints.getLocation.useLazyQuery();

  async function getLocation() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPositionAsync();
      setCurrentLocation({ latitude, longitude });
    } else {
      setCurrentLocation(defaultLocation);
    }
  }

  const getWeatherData = async () => {
    const { data } = await getWether(currentLocation);
    setWeatherData(data);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [currentLocation]);

  console.log(weatherData);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Fragment key="Home">
      <View style={s.meteoBasic}></View>
      <View style={s.searchBar}></View>
      <View style={s.meteoAdvanced}></View>
    </Fragment>
  );
};
export default Home;
