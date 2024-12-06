import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Floor1Svg from "../images/floor1.svg"; // Ensure this is a valid React component

export default function Floor() {

//     const scale = useRef(1);

//   const onPinchGestureEvent = ({ nativeEvent }) => {
//     console.log('Pinch scale:', nativeEvent.scale);
//     if (nativeEvent.state === State.ACTIVE) {
//       scale.current = nativeEvent.scale;
//     }
//   };

const scale = useRef(new Animated.Value(1)).current;

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: false }
  );

  const onPinchHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END || nativeEvent.state === State.CANCELLED) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  return (

    <PinchGestureHandler
      onGestureEvent={onPinchGestureEvent}
      onHandlerStateChange={onPinchHandlerStateChange}
    >
      <View>
        <Animated.View
          style={{
            transform: [{ scale: scale }],
          }}
        >
          <Floor1Svg width="100%" height="100%" />
        </Animated.View>
      </View>
    </PinchGestureHandler>
  );
}
