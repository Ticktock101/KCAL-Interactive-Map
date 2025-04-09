import React from 'react';
import { Animated, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const RoomPic = ({ top, left, scale, number, textSize, department, onSendRoomNumber }) => {

  const sendDataToParent = () => {
    onSendRoomNumber(number);
  };

  return (
    <Animated.View style={[
      styles.roomNumber, 
      {  
        top: `${top}%`,
        left: `${left}%`,
      
      }
      
    ]} className={"z-9 w-[10%]"}>
      <TouchableOpacity onPress={sendDataToParent}>
        <Animated.Image style={[styles.text]} source={require('../images/favicon.png')} className={""}>
        </Animated.Image>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  roomNumber: {
    position: "absolute",
  },
  text: {
    // width: "90%",
    // height: "90%",
  },



});

export default RoomPic;
