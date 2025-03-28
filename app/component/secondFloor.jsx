import React from 'react';
import { View, StyleSheet } from 'react-native';
import Floor2Svg from "../images/kcalfloor2.svg";
import RoomNumber from './roomNumber';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function SecondFloor() {
  
  return (
      <View className='w-full h-full'>
        <ReactNativeZoomableView
          maxZoom={4}
          minZoom={1}
          zoomStep={1}
          initialZoom={1}
          bindToBorders={true}
          // onZoomAfter={this.logOutZoomState}
        >
          <Floor2Svg width="100%" height="100%" className=''/>
          <View style={styles.roomNumbersContainer}>

            {/*2100s*/}
            <RoomNumber top={58.5} left={1.95} number={"2100"} textSize={5} department=""/>
            <RoomNumber top={52.1} left={4.9} number={"2101"} textSize={5} department=""/>
            <RoomNumber top={53.5} left={10.35} number={"2103"} textSize={3.5} department=""/>
            <RoomNumber top={53.5} left={14} number={"2105"} textSize={4.5} department=""/>
            <RoomNumber top={51.3} left={14} number={"2107"} textSize={4.5} department=""/>
            <RoomNumber top={57.2} left={26.4} number={"2110"} textSize={5} className="kca" department="kca"/>
            <RoomNumber top={57.2} left={32.7} number={"2112"} textSize={5.5} department=""/>
            <RoomNumber top={50.3} left={28.6} number={"2113"} textSize={6} className="kca" department="kca"/>
            <RoomNumber top={57.2} left={41.3} number={"2114"} textSize={5} className="healthScience" department="healthScience"/>
            <RoomNumber top={57.2} left={48.9} number={"2116"} textSize={5} className="CS" department="CS"/>
            <RoomNumber top={57.2} left={53.8} number={"2118"} textSize={5} className="kca" department="kca"/>
            <RoomNumber top={49} left={50.5} number={"2119"} textSize={6} className="law" department="law"/>
            <RoomNumber top={57.2} left={60.8} number={"2120"} textSize={5.5} className="healthScience" department="healthScience"/>
            <RoomNumber top={51.2} left={57} number={"2121"} textSize={3} department=""/>
            <RoomNumber top={53.95} left={67} number={"2122"} textSize={4.5} className="kca" department="kca"/>
            <RoomNumber top={50.5} left={66.1} number={"2127"} textSize={5.5} className="kca" department="kca"/>
            
            {/*2200s*/}
            <RoomNumber top={47} left={6.5} number={"2200"} textSize={4.5} className="law" department="law"/>
            <RoomNumber top={47} left={13.5} number={"2201"} textSize={4.5} className="law" department="law"/>
            <RoomNumber top={39} left={22.1} number={"2203"} textSize={4.5} department=""/>
            <RoomNumber top={46} left={28.4} number={"2204"} textSize={6} className="healthScience" department="healthScience"/>
            <RoomNumber top={39} left={26.5} number={"2205"} textSize={4.5} className="law" department="law"/>
            <RoomNumber top={46} left={39.5} number={"2206"} textSize={2.7} department=""/>
            <RoomNumber top={39} left={33} number={"2207"} textSize={4.5} classname="healthScience" department="healthScience"/>
            <RoomNumber top={39} left={40} number={"2209"} textSize={4.5} className="healthScience" department="healthScience"/>
            <RoomNumber top={44.65} left={51.4} number={"2210"} textSize={4.5} department=""/>
            <RoomNumber top={39} left={48.8} number={"2211"} textSize={5} className="healthScience" department="healthScience"/>
            <RoomNumber top={45.4} left={57.2} number={"2212"} textSize={4.5} department=""/>
            <RoomNumber top={40.5} left={53.3} number={"2213"} textSize={3} department=""/>
            <RoomNumber top={39} left={56.3} number={"2215"} textSize={5.5} classname="healthScience" department="healthScience"/>
            <RoomNumber top={46} left={66.1} number={"2216"} textSize={5.5} className="kca" department="kca"/>
            <RoomNumber top={39} left={63} number={"2217"} textSize={5.5} className="healthScience" department="healthScience"/>
            <RoomNumber top={46} left={72.8} number={"2218"} textSize={5.5} className="animalScience" department="animalScience"/>
            <RoomNumber top={39} left={71.6} number={"2219"} textSize={5.5} className="healthScience" department="healthScience"/>
            <RoomNumber top={39} left={80} number={"2221"} textSize={5.5} className="healthScience" department="healthScience"/>
            <RoomNumber top={46} left={85.2} number={"2222"} textSize={5.5} className="animalScience" department="animalScience"/>
            <RoomNumber top={39} left={85.7} number={"2223"} textSize={5.5} className="CS" department="CS"/>
            <RoomNumber top={46} left={93.9} number={"2226"} textSize={5.5} className="animalScience" department="animalScience"/>
            
            {/* lock in james */}
          </View>
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
