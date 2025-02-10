import React, { useRef, useState } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import { PinchGestureHandler, State, PanGestureHandler } from 'react-native-gesture-handler';
import Floor1Svg from "../images/kcalfinal.svg";
import RoomNumber from './roomNumber';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function Floor() {

const scale = useRef(new Animated.Value(1)).current;
const translateX = useRef(new Animated.Value(0)).current;
const translateY = useRef(new Animated.Value(0)).current; 
const lastScale = useRef(1);

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: false }
  );

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: false }
  );


  const onPinchStateChange = (event) => {
    if (event.nativeEvent.state === State.END || event.nativeEvent.state === State.CANCELLED) {
      lastScale.current *= event.nativeEvent.scale;
      lastScale.current = Math.max(0.5, Math.min(lastScale.current, 3));

    } else if (event.nativeEvent.state === State.BEGAN) {
      scale.setOffset(lastScale.current);
      scale.setValue(1);
    }
  };

  return (
      <View className='w-full h-full'>
        <ReactNativeZoomableView
          maxZoom={3}
          minZoom={1}
          zoomStep={1}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
        >
          <Floor1Svg width="100%" height="100%" className=''/>
          {/* <View style={styles.roomNumbersContainer}>
              <RoomNumber top={41} left={12.7} scale={scale} number={"1717"} textSize={4} />
              <RoomNumber top={39.5} left={16} scale={scale} number={"1719"} textSize={4} />
              <RoomNumber top={43} left={2.5} scale={scale} number={"1708"} textSize={10} />
              <RoomNumber top={54} left={13} scale={scale} number={"1701"} textSize={5} />
              <RoomNumber top={51} left={13} scale={scale} number={"1703"} textSize={4} />
              <RoomNumber top={52} left={2.3} scale={scale} number={"1800"} textSize={10} />
              {/* lock in james */}
          {/* </View> */}
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
