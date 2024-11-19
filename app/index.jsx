import { Text, View, SafeAreaView } from "react-native";
import Header from "./component/header";
import Svg, { Circle } from 'react-native-svg';
// import Floor1Svg from "./images/test.svg";

// console.log(Floor1Svg);


export default function Index() {
  return (
    <SafeAreaView className="h-screen max-w-full">
        <View className="h-1/5">
          <Header />
        </View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <View>
          {/* <Floor1Svg/> */}
          <Svg height="100" width="100">
            <Circle
              cx="50" // Center x
              cy="50" // Center y
              r="40"  // Radius
              stroke="blue" // Circle stroke color
              strokeWidth="2" // Stroke width
              fill="green" // Fill color
            />
          </Svg>
        </View>
    </SafeAreaView>
    
  );
}
