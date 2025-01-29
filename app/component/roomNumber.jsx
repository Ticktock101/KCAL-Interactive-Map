import { Text, View, Image, Button, TouchableOpacity, StyleSheet, Animated } from "react-native";
import React, { useState } from 'react';

const RoomNumber = props => {

    return (
      <Animated.View style={[
        styles.roomNumber, 
        { 
          top: Animated.divide(props.height, props.scale), 
          left: Animated.divide(props.width, props.scale) 
        }
      ]}>
        <Text style={styles.text}>{props.roomNumber}</Text>
      </Animated.View>
    );
}

const styles = StyleSheet.create({
  roomNumbersContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  roomNumber: {
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    fontWeight: "bold",
  },
});


export default RoomNumber;