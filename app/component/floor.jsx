import React, { useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Floor1Svg from "../images/floor1.svg"; // Ensure this is a valid React component
import { transform } from '@babel/core';

export default function Floor() {

//     const scale = useRef(1);

//   const onPinchGestureEvent = ({ nativeEvent }) => {
//     console.log('Pinch scale:', nativeEvent.scale);
//     if (nativeEvent.state === State.ACTIVE) {
//       scale.current = nativeEvent.scale;
//     }
//   };




// const scale = useRef(new Animated.Value(1)).current;

  // const onPinchGestureEvent = Animated.event(
  //   [{ nativeEvent: { scale: scale } }],
  //   { useNativeDriver: false }
  // );

  // const onPinchHandlerStateChange = ({ nativeEvent }) => {
  //   if (nativeEvent.state === State.END || nativeEvent.state === State.CANCELLED) {
  //     Animated.spring(scale, {
  //       toValue: 1,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  // };


  // const [scale, setScale] = useState(1);

  // const onPinchEvent = (event) => {
  //   setScale(event.nativeEvent.scale);
  // };

  const scale = React.useRef(new Animated.Value(0)).current;
  const onPinchEvent = Animated.event([{nativeEvent: {scale: scale}}]);

  return (

    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      // onHandlerStateChange={onPinchHandlerStateChange}
    >
      <View>
        <Animated.View
          style={{transform: [{ scale }]}}
        >
          <Floor1Svg 
            width="100%" 
            height="100%" 
          />
        </Animated.View>
      </View>
    </PinchGestureHandler>
  );
}
