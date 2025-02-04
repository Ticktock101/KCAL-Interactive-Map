import { Text, View, SafeAreaView } from "react-native";
import Header from "./component/header";
import Floor from "./component/floor";
import RoomNumber from "./component/roomNumber";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView className="bg-white">
      <SafeAreaView className="h-screen max-w-full">
          <View className="h-1/5 z-10">
            <Header />
          </View>
          <View className="w-screen z-1">
            <Floor/>
          </View>
      </SafeAreaView>
    </GestureHandlerRootView>

  );
}
