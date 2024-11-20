import { Fragment } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./home.style";

const Index = () => {
  return (
    <Fragment>
      <SafeAreaProvider>
        <SafeAreaView style={s.main}>
          <View style={s.header}>
            <Text>Header</Text>
          </View>
          <View style={s.body}>
            <Text>Body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </Fragment>
  );
};

export default Index;
