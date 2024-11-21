import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./index.style";
import Home from "./pages/Home";

const Index = () => {
  const backGroundImage = require("../assets/images/background.png");
  return (
    <ImageBackground
      style={s.containerBackGround}
      source={backGroundImage}
      imageStyle={s.backGroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.main}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Index;
