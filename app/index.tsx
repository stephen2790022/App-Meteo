import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./index.style";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";

const Index = () => {
  const backGroundImage = require("../assets/images/background.png");
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Index;
