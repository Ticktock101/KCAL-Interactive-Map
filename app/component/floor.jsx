import React, { useRef, useState } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import { PinchGestureHandler, State, PanGestureHandler } from 'react-native-gesture-handler';
import Floor1Svg from "../images/kcalfinal.svg";
import RoomNumber from './roomNumber';

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

    <PinchGestureHandler
      onGestureEvent={onPinchGestureEvent}
      onHandlerStateChange={onPinchStateChange}
    >
    <PanGestureHandler
        onGestureEvent={onPanGestureEvent}
        // onHandlerStateChange={onPanHandlerStateChange}
      >
      <View>
        <Animated.View
          style={{
            transform: [{ scale: scale },
                { translateX: translateX},
                { translateY: translateY}],
          }}
        >
          <Floor1Svg width="100%" height="100%" className=''/>
          <Animated.View style={styles.roomNumbersContainer}>
              <RoomNumber top={300} left={150} scale={scale} number={"102"} textSize={10} />
          </Animated.View>
        </Animated.View>
      </View>
      </PanGestureHandler>
    </PinchGestureHandler>
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
