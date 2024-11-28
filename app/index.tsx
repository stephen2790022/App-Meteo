import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./index.style";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { useFonts } from "expo-font";

const Index = () => {
  const backGroundImage = require("../assets/images/background.png");
  const alataRegular = require("../assets/fonts/Alata-Regular.ttf");
  const [isFontLoaded] = useFonts({
    "Alata-Regular": alataRegular,
  });
  console.log(isFontLoaded);
  return (
    <Provider store={store}>
      <ImageBackground
        style={s.containerBackGround}
        source={backGroundImage}
        imageStyle={s.backGroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.main}>
            {isFontLoaded ? <Home /> : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </Provider>
  );
};

export default Index;
