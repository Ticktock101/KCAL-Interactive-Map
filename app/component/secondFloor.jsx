import React from 'react';
import { View, StyleSheet } from 'react-native';
import Floor2Svg from "../images/kcalfloor2.svg";
import RoomNumber from './roomNumber';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function SecondFloor() {
  
  return (
      <View className='w-full h-full'>
        <ReactNativeZoomableView
          maxZoom={4}
          minZoom={1}
          zoomStep={1}
          initialZoom={1}
          bindToBorders={true}
          // onZoomAfter={this.logOutZoomState}
        >
          <Floor2Svg width="100%" height="100%" className=''/>
          <View style={styles.roomNumbersContainer}>

            {/*2100s*/}
            <RoomNumber top={58.5} left={2.1} number={"2100"} textSize={4.5} />
            <RoomNumber top={52.1} left={5} number={"2101"} textSize={4.5} />
            <RoomNumber top={53.5} left={10.35} number={"2103"} textSize={3.5} />
            <RoomNumber top={53.5} left={14} number={"2105"} textSize={4.5} />
            <RoomNumber top={51.3} left={14} number={"2107"} textSize={4.5} />
            <RoomNumber top={57.2} left={26.6} number={"2110"} textSize={4.5} />
            <RoomNumber top={57.2} left={32.8} number={"2112"} textSize={4.5} />
            <RoomNumber top={50.5} left={29} number={"2113"} textSize={4.5} />
            <RoomNumber top={57.2} left={41.4} number={"2114"} textSize={4.5} />
            <RoomNumber top={57.2} left={49} number={"2116"} textSize={4.5} />
            <RoomNumber top={57.2} left={53.9} number={"2118"} textSize={4.5} />
            <RoomNumber top={49} left={51} number={"2119"} textSize={4.5} />
            <RoomNumber top={57.2} left={61} number={"2120"} textSize={4.5} />
            <RoomNumber top={51.2} left={57} number={"2120"} textSize={3} />
            <RoomNumber top={53.9} left={67} number={"2122"} textSize={4.5} />
            <RoomNumber top={50.6} left={66.3} number={"2127"} textSize={4.5} />
            
            {/*2200s*/}
            <RoomNumber top={47} left={6.5} number={"2200"} textSize={4.5} />
            <RoomNumber top={47} left={13.5} number={"2201"} textSize={4.5} />
            <RoomNumber top={39} left={22.1} number={"2203"} textSize={4.5} />
            <RoomNumber top={46} left={29} number={"2204"} textSize={4.5} />
            <RoomNumber top={39} left={26.5} number={"2205"} textSize={4.5} />
            <RoomNumber top={46} left={39.5} number={"2206"} textSize={2.7} />
            <RoomNumber top={39} left={33} number={"2207"} textSize={4.5} />
            <RoomNumber top={39} left={40} number={"2209"} textSize={4.5} />
            <RoomNumber top={44.65} left={51.4} number={"2210"} textSize={4.5} />
            <RoomNumber top={39} left={48.8} number={"2211"} textSize={4.5} />
            <RoomNumber top={45.4} left={57.2} number={"2212"} textSize={4.5} />
            <RoomNumber top={40.5} left={53.3} number={"2213"} textSize={3} />
            <RoomNumber top={39} left={56.5} number={"2215"} textSize={4.5} />
            <RoomNumber top={46} left={66.3} number={"2216"} textSize={4.5} />
            <RoomNumber top={39} left={63} number={"2217"} textSize={4.5} />
            <RoomNumber top={46} left={73} number={"2218"} textSize={4.5} />
            <RoomNumber top={39} left={72} number={"2219"} textSize={4.5} />
            <RoomNumber top={39} left={80.2} number={"2221"} textSize={4.5} />
            <RoomNumber top={46} left={85.3} number={"2222"} textSize={4.5} />
            <RoomNumber top={39} left={86} number={"2223"} textSize={4.5} />
            <RoomNumber top={46} left={94.2} number={"2226"} textSize={4.5} />
            
            {/* lock in james */}
          </View>
        </ReactNativeZoomableView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roomNumbersContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  roomNumber: {
    position: "absolute",
  },
  text: {
    fontWeight: "bold",
    fontSize: 10,
  },
});
