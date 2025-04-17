import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Floor1Svg from "../images/kcalfinal.svg";
import RoomNumber from './roomNumber';
import RoomPic from "./roomPic";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const Floor = ({ 
  isCheckedEngineering,
  isCheckedAV,
  isCheckedCosmo,
  isCheckedKCA,
  isCheckedAdultTransition,
  isCheckedHealthScience,
  isCheckedAnimalScience,
  isCheckedArchitecture,
  isCheckedWelding,
  isCheckedCS,
  isCheckedCulinary,
  isCheckedLaw,
  isCheckedOffice,
  isCheckedConstruction,
  isFiltered,
  sendRoomNumberToParent }) => {
  
  const [roomNumber, setRoomNumber] = useState(0);

  const handleMessageFromChild = (childData) => {
    setRoomNumber(childData);
    sendRoomNumberToParent(childData);
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

            {(!isFiltered || (isFiltered && isCheckedOffice)) && (
              <>
                {/*und*/}
                <RoomNumber top={50.9} left={13} number={"1703"} textSize={4} />
                <RoomNumber top={52} left={2.3} number={"1800"} textSize={10} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={62.9} left={7.8} number={"1102"} textSize={3.2} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={64} left={39.3} number={"1110"} textSize={6} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={58} left={39.5} number={"1113"} textSize={5.4} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={51.4} left={55.2} number={"1206"} textSize={7} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={49.9} left={93.8} number={"1328"} textSize={5} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={40} left={93.9} number={"1412"} textSize={6}  department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={41.9} left={50.2} number={"1507"} textSize={6} department="office" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={35.5} left={40.3} number={"1614"} textSize={7} department="office" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
            
            {(!isFiltered || (isFiltered && isCheckedAV)) && (
              <>
                {/*av*/}
                <RoomNumber top={41} left={12.7} number={"1717"} textSize={4} className="av" department="av" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={39.5} left={16} number={"1719"} textSize={4} className="av" department="av" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={54} left={13} number={"1701"} textSize={5} className="av" department="av" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={56} left={19.1} number={"1105"} textSize={4.5} className="av" department="av" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}

            {(!isFiltered || (isFiltered && isCheckedCosmo)) && (
              <>
                {/*cosmo*/}
                <RoomNumber top={43} left={2.5} number={"1708"} textSize={10} className="cosmetology"department="cosmetology" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedKCA)) && (
              <>
                {/*kca*/}
                <RoomNumber top={64.4} left={2.65} number={"1100"} textSize={6} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={57.2} left={64.8} number={"1211"} textSize={4.5} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={57.2} left={68} number={"1213"} textSize={4.5} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={51.7} left={65.7} number={"1214"} textSize={5.5} className="kca"department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={49.9} left={80.5} number={"1322"} textSize={5} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={52.65} left={41.5} number={"1502"} textSize={5.2} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={52.65} left={37.03} number={"1603"} textSize={4.5} className="kca" department="kca" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedAdultTransition)) && (
              <>
                {/*adult transition*/}
                <RoomNumber top={66.1} left={8.6} number={"1104"} textSize={4.8} className="adultTransition" department="adultTransition" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedEngineering)) && (
              <>
                {/*engineering*/}
                <RoomNumber top={57.2} left={51.5} number={"1203"} textSize={5.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={51.4} left={49.8} number={"1204"} textSize={4.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={57.2} left={57.9} number={"1205"} textSize={5.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45.7} left={50.7} number={"1301"} textSize={4.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={46.2} left={55} number={"1303"} textSize={4.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45.6} left={59.4} number={"1305"} textSize={4.5} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45} left={42.5} number={"1506"} textSize={4.9} className="engineering" department="engineering" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedHealthScience)) && (
              <>
                {/*HS*/}
                <RoomNumber top={57.2} left={72.4} number={"1215"} textSize={5.5} className="healthScience" department="healthScience" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45.45} left={72.05} number={"1313"} textSize={5.5} className="healthScience" department="healthScience" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}

            {(!isFiltered || (isFiltered && isCheckedAnimalScience)) && (
              <>
                {/* AS */}
                <RoomNumber top={51.5} left={76.1} number={"1222"} textSize={4.5} className="animalScience" department="animalScience" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={50} left={85.3} number={"1324"} textSize={4.5} className="animalScience" department="animalScience" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={50} left={89.4} number={"1326"} textSize={4.5} className="animalScience" department="animalScience" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedArchitecture)) && (
              <>
                {/*architecture*/}
                <RoomNumber top={45.45} left={65.7} number={"1311"} textSize={5.5} className="architecture" department="architecture" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={36} left={32.7} number={"1610"} textSize={4.5} className="architecture" department="architecture" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={41.15} left={40.8} number={"1615"} textSize={5.3} className="architecture" department="architecture" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
              
            {(!isFiltered || (isFiltered && isCheckedWelding)) && (
              <>
                {/*welding*/}
                <RoomNumber top={40} left={60.05} number={"1400"} textSize={5.5} className="welding" department="welding" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={40} left={66.1} number={"1401"} textSize={5.5} className="welding" department="welding" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={40} left={71.7} number={"1402"} textSize={5.5} className="welding" department="welding" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45.3} left={79.9} number={"1406"} textSize={5} className="welding" department="welding" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={45.6} left={86} number={"1408"} textSize={4.5} className="welding" department="welding" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}

            {(!isFiltered || (isFiltered && isCheckedConstruction)) && (
              <>
                {/* constrction */}
                <RoomNumber top={40} left={76.8} number={"1403"} textSize={5.5} className="construction" department="construction" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={40} left={82.4} number={"1405"} textSize={5.5} className="construction" department="construction" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={40} left={88.2} number={"1407"} textSize={5.5} className="construction" department="construction" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={37} left={36.2} number={"1612"} textSize={4} className="construction" department="construction" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}

            
            {(!isFiltered || (isFiltered && isCheckedCS)) && (
              <>
                {/*CS*/}
                <RoomNumber top={49.55} left={42} number={"1504"} textSize={5.2} className="CS" department="CS" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={49.55} left={37.3} number={"1605"} textSize={4.8} className="CS" department="CS" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={44.7} left={36.8} number={"1607"} textSize={5.8} className="CS" department="CS" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}
            
            {(!isFiltered || (isFiltered && isCheckedCulinary)) && (
              <>
                {/*culinary*/}
                <RoomNumber top={52.5} left={23.2} number={"1602"} textSize={4.5} className="culinary" department="culinary" onSendRoomNumber={handleMessageFromChild}/>
                <RoomNumber top={46.1} left={25.4} number={"1604"} textSize={6.5} className="culinary" department="culinary" onSendRoomNumber={handleMessageFromChild}/>
              </>
            )}

            {/* health type shi */}
            {/* fire pull handles 1 floor */}
            <RoomPic top={38} left={11} image={require('../images/fire.png')}/>
            <RoomPic top={61} left={2} image={require('../images/fire.png')}/>
            <RoomPic top={39} left={34} image={require('../images/fire.png')}/>
            <RoomPic top={42} left={47} image={require('../images/fire.png')}/>
            <RoomPic top={43} left={60} image={require('../images/fire.png')}/>
            <RoomPic top={48} left={96} image={require('../images/fire.png')}/>
            <RoomPic top={55} left={64} image={require('../images/fire.png')}/>
            <RoomPic top={55} left={75} image={require('../images/fire.png')}/>
            <RoomPic top={60} left={66} image={require('../images/fire.png')}/>
            <RoomPic top={65} left={42} image={require('../images/fire.png')}/>
            <RoomPic top={61} left={34} image={require('../images/fire.png')}/>
            <RoomPic top={57} left={2} image={require('../images/fire.png')}/>

            {/* extinfuisher */}
            {/* LA VACA SATURNA SATURNITA */}
            <RoomPic top={61} left={3} image={require('../images/extinguisher.png')}/>
            <RoomPic top={46.25} left={9.5} image={require('../images/extinguisher.png')}/>
            <RoomPic top={39} left={38} image={require('../images/extinguisher.png')}/>
            <RoomPic top={51} left={46.5} image={require('../images/extinguisher.png')}/>
            <RoomPic top={49} left={34} image={require('../images/extinguisher.png')}/>
            <RoomPic top={47} left={52} image={require('../images/extinguisher.png')}/>
            <RoomPic top={48} left={73.2} image={require('../images/extinguisher.png')}/>
            <RoomPic top={48} left={91} image={require('../images/extinguisher.png')}/>
            <RoomPic top={43.5} left={81} image={require('../images/extinguisher.png')}/>
            <RoomPic top={55} left={72} image={require('../images/extinguisher.png')}/>
            <RoomPic top={55} left={58} image={require('../images/extinguisher.png')}/>

            {/* first aid */}
            {/* BRR BRR PATAPIM */}
            <RoomPic top={47} left={49} image={require('../images/GreenCross.png')}/>

            {/* defibrillator */}
            <RoomPic top={61.5} left={53.8} image={require('../images/defribrillator.png')}/>
            <RoomPic top={49} left={73.2} image={require('../images/defribrillator.png')}/>
            <RoomPic top={43.4} left={75} image={require('../images/defribrillator.png')}/>
            <RoomPic top={50}left={34} image={require('../images/defribrillator.png')}/>
            <RoomPic top={54}left={9} image={require('../images/defribrillator.png')}/>
            
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


export default Floor