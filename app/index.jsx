import { Text, View, SafeAreaView } from "react-native";
import Header from "./component/header";
import Floor from "./component/floor";
import RoomNumber from "./component/roomNumber";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-screen max-w-full">
          <View className="h-1/5">
            <Header />
          </View>
          <View className="w-screen">
            <Floor/>
          </View>
      </SafeAreaView>
    </GestureHandlerRootView>

  );
}
