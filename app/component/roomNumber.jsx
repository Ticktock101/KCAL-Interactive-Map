import React from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const RoomNumber = ({ top, left, scale, number, textSize }) => {
  return (
    <Animated.View style={[
      styles.roomNumber, 
      {  
        top: top,
        left: left,
        transform: [
          { scaleX: Animated.divide(1, scale) },
          { scaleY: Animated.divide(1, scale) }
        ],
      }
    ]}>
      <Animated.Text style={[styles.text, { fontSize: Animated.multiply(textSize, scale) }]}>{number}</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  roomNumber: {
    position: "absolute",
  },
  text: {
    fontWeight: "bold",
  },
});

export default RoomNumber;
