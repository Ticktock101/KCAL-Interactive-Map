import React from 'react';
import { Animated, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const RoomNumber = ({ top, left, scale, number, textSize, department, onSendRoomNumber }) => {

  const sendDataToParent = () => {
    onSendMessage(number);
  };

  return (
    <Animated.View style={[
      styles.roomNumber, 
      {  
        top: `${top}%`,
        left: `${left}%`,
      
      }
      
    ]} className={"z-9"}>
      <TouchableOpacity onPress={sendDataToParent}>
        <Animated.Text style={[styles.text, { fontSize: textSize }, styles[department]]} >
          {number}
        </Animated.Text>
      </TouchableOpacity>
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
  engineering: {
    color: "#ff8020"
  },
  healthScience: {
    color: "blue"
  },
  kca: {
    color: "green"
  },
  CS: {
    color: "#e3b"
  },
  architecture: {
    color: "#f0b000"
  },
  construction: {
    color: "#c51930"
  },
  culinary: {
    color: "#30a0d0"
  },
  welding: {
    color: "#95f"
  },
  animalScience: {
    color: "#2b9"
  },
  av: {
    color: "#239"
  },
  adultTransition: {
    color: "#b31"
  },
  cosmetology: {
    color: "#19e"
  },
  law: {
    color: "#fc6"
  },

});

export default RoomNumber;
{/*lock in bumka*/}