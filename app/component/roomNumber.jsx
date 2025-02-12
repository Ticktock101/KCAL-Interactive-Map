import React from 'react';
import { Animated, Text, StyleSheet, Button } from 'react-native';

const RoomNumber = ({ top, left, scale, number, textSize }) => {

  return (
    <Animated.View style={[
      styles.roomNumber, 
      {  
        top: `${top}%`,
        left: `${left}%`,
      
      }
      
    ]} className={"z-9"}>
        <Animated.Text style={[styles.text, { fontSize: textSize }]}>{number}</Animated.Text>
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
