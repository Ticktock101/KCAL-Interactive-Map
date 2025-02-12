import React from 'react';
import { View, StyleSheet } from 'react-native';
import Floor1Svg from "../images/kcalfinal.svg";
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
          <Floor1Svg width="100%" height="100%" className=''/>
          <View style={styles.roomNumbersContainer}>
              <RoomNumber top={41} left={12.7} number={"1717"} textSize={4} />
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
