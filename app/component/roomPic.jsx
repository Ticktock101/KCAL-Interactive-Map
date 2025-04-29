import React from 'react';
import { Animated, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const RoomPic = ({ top, left, number, onSendRoomNumber, image }) => {

  

  

  return (
    <Animated.View style={[
      styles.roomNumber, 
      {  
        top: `${top}%`,
        left: `${left}%`,
      
      }
      
    ]} className={"z-9 w-[2%] h-[2%] object-contain"}>
      <TouchableOpacity className=''>
        <Animated.Image style={[styles.text]} source={image} className={"h-fit "} resizeMode={'contain'}>
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
    width: "100%",
    height: "100%",
  },



});

export default RoomPic;
