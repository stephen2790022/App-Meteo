import { Fragment, useEffect, useState } from "react";
import { View, Text } from "react-native";
import s from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

type LocationType = {
  latitude: number;
  longitude: number;
};
const Home = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(
    null
  );
  async function getLocation() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPositionAsync();
      setCurrentLocation({ latitude, longitude });
      console.log(location);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Fragment key="Home">
      <View style={s.meteoBasic}></View>
      <View style={s.searchBar}></View>
      <View style={s.meteoAdvanced}></View>
    </Fragment>
  );
};
export default Home;
