import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Floor1Svg from "../images/kcalfinal.svg";
import RoomNumber from './roomNumber';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

export default function Floor() {
  
  const [roomNumber, setRoomNumber] = useState(0);

  const handleMessageFromChild = (childData) => {
    setRoomNumber(childData);
  };

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
          <Floor1Svg width="100%" height="100%" className="z-8"/>
          <View style={styles.roomNumbersContainer} className='z-9'>

              {/*1700s*/}
              <RoomNumber top={41} left={12.7} number={"1717"} textSize={4} className="av" department="av" onSendRoomNumber={handleMessageFromChild}/>
              <RoomNumber top={39.5} left={16} number={"1719"} textSize={4} className="av" department="av"/>
              <RoomNumber top={43} left={2.5} number={"1708"} textSize={10} className="cosmetology"department="cosmetology"/>
              <RoomNumber top={54} left={13} number={"1701"} textSize={5} className="av" department="av"/>
              <RoomNumber top={50.9} left={13} number={"1703"} textSize={4} />

              <RoomNumber top={52} left={2.3} number={"1800"} textSize={10} department=""/>

              {/*1100s*/}
              <RoomNumber top={64.4} left={2.65} number={"1100"} textSize={6} className="kca" department="kca"/>
              <RoomNumber top={62.9} left={7.8} number={"1102"} textSize={3.2} department=""/>
              <RoomNumber top={66.1} left={8.6} number={"1104"} textSize={4.8} className="adultTransition" department="adultTransition"/>
              <RoomNumber top={56} left={19.1} number={"1105"} textSize={4.5} className="av" department="av"/>
              <RoomNumber top={64} left={39.3} number={"1110"} textSize={6} department=""/>
              <RoomNumber top={58} left={39.5} number={"1113"} textSize={5.4} department=""/>

              {/*1200s*/}
              <RoomNumber top={57.2} left={51.5} number={"1203"} textSize={5.5} className="engineering" department="engineering"/>
              <RoomNumber top={51.4} left={49.8} number={"1204"} textSize={4.5} className="engineering" department="engineering"/>
              <RoomNumber top={57.2} left={57.9} number={"1205"} textSize={5.5} className="engineering" department="engineering"/>
              <RoomNumber top={51.4} left={55.2} number={"1206"} textSize={7} department=""/>
              <RoomNumber top={57.2} left={64.8} number={"1211"} textSize={4.5} className="kca" department="kca"/>
              <RoomNumber top={57.2} left={68} number={"1213"} textSize={4.5} className="kca" department="kca"/>
              <RoomNumber top={51.7} left={65.7} number={"1214"} textSize={5.5} className="kca"department=""kca/>
              <RoomNumber top={57.2} left={72.4} number={"1215"} textSize={5.5} className="healthScience" department="healthScience"/>
              <RoomNumber top={51.5} left={76.1} number={"1222"} textSize={4.5} className="animalScience" department="animalScience"/>

              {/*1300s*/}
              <RoomNumber top={45.7} left={50.7} number={"1301"} textSize={4.5} className="engineering" department="engineering"/>
              <RoomNumber top={46.2} left={55} number={"1303"} textSize={4.5} className="engineering" department="engineering"/>
              <RoomNumber top={45.6} left={59.4} number={"1305"} textSize={4.5} className="engineering" department="engineering"/>
              <RoomNumber top={45.45} left={65.7} number={"1311"} textSize={5.5} className="architecture" department="architecture"/>
              <RoomNumber top={45.45} left={72.05} number={"1313"} textSize={5.5} className="healthScience" department="healthScience"/>
              <RoomNumber top={49.9} left={80.5} number={"1322"} textSize={5} className="kca" department="kca"/>
              <RoomNumber top={50} left={85.3} number={"1324"} textSize={4.5} className="animalScience" department="animalScience"/>
              <RoomNumber top={50} left={89.4} number={"1326"} textSize={4.5} className="animalScience" department="animalScience"/>
              <RoomNumber top={49.9} left={93.8} number={"1328"} textSize={5} department=""/>

              {/*1400s*/}
              <RoomNumber top={40} left={60.05} number={"1400"} textSize={5.5} className="welding" department="welding"/>
              <RoomNumber top={40} left={66.1} number={"1401"} textSize={5.5} className="welding" department="welding"/>
              <RoomNumber top={40} left={71.7} number={"1402"} textSize={5.5} className="welding" department="welding"/>
              <RoomNumber top={40} left={76.8} number={"1403"} textSize={5.5} className="construction" department="construction"/>
              <RoomNumber top={40} left={82.4} number={"1405"} textSize={5.5} className="construction" department="construction"/>
              <RoomNumber top={45.3} left={79.9} number={"1406"} textSize={5} className="welding" department="welding"/>
              <RoomNumber top={40} left={88.2} number={"1407"} textSize={5.5} className="construction" department="construction"/>
              <RoomNumber top={45.6} left={86} number={"1408"} textSize={4.5} className="welding" department="welding"/>
              <RoomNumber top={40} left={93.9} number={"1412"} textSize={6}  department=""/>

              {/*1500s*/}
              <RoomNumber top={52.65} left={41.5} number={"1502"} textSize={5.2} className="kca" department="kca"/>
              <RoomNumber top={49.55} left={42} number={"1504"} textSize={5.2} className="CS" department="CS"/>
              <RoomNumber top={45} left={42.5} number={"1506"} textSize={4.9} className="engineering" department="engineering"/>
              <RoomNumber top={41.9} left={50.2} number={"1507"} textSize={6} department=""/>


              {/*1600s*/}
              <RoomNumber top={52.5} left={23.2} number={"1602"} textSize={4.5} className="culinary" department="culinary"/>
              <RoomNumber top={52.65} left={37.03} number={"1603"} textSize={4.5} className="kca" department="kca"/>
              <RoomNumber top={46.2} left={25.5} number={"1604"} textSize={6} className="culinary" department="culinary"/>
              <RoomNumber top={49.55} left={37.3} number={"1605"} textSize={4.8} className="CS" department="CS"/>
              <RoomNumber top={44.7} left={36.8} number={"1607"} textSize={5.8} className="CS" department="CS"/>
              <RoomNumber top={36} left={32.7} number={"1610"} textSize={4.5} className="architecture" department="architecture"/>
              <RoomNumber top={37} left={36.2} number={"1612"} textSize={4} className="construction" department="construction"/>
              <RoomNumber top={35.5} left={40.3} number={"1614"} textSize={7} department=""/>
              <RoomNumber top={41.15} left={40.8} number={"1615"} textSize={5.3} className="architecture" department="architecture"/>

              {/* lock in bumka */}
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
