import { Text, View, SafeAreaView, TouchableOpacity, Image, Button, StyleSheet, ScrollView } from "react-native";
import Header from "./component/header";
import Floor from "./component/floor";
import React, { useState } from 'react';
import SecondFloor from "./component/secondFloor";
import Checkboxes from "./component/checkbox";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Index() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Floor 1', value: 'Floor 1'},
    {label: 'Floor 2', value: 'Floor 2'}
  ]);

  const [isFiltered, setIsFiltered] = useState(false);
  const [isCheckedEngineering, setCheckedEngineering] = useState(false);
  const [isCheckedAV, setCheckedAV] = useState(false);
  const [isCheckedCosmo, setCheckedCosmo] = useState(false);
  const [isCheckedKCA, setCheckedKCA] = useState(false);
  const [isCheckedAdultTransition, setCheckedAdultTransition] = useState(false);
  const [isCheckedHealthScience, setCheckedHealthScience] = useState(false);
  const [isCheckedAnimalScience, setCheckedAnimalScience] = useState(false);
  const [isCheckedArchitecture, setCheckedArchitecture] = useState(false);
  const [isCheckedWelding, setCheckedWelding] = useState(false);
  const [isCheckedCS, setCheckedCS] = useState(false);
  const [isCheckedCulinary, setCheckedCulinary] = useState(false);
  const [isCheckedLaw, setCheckedLaw] = useState(false);
  const [isCheckedOffice, setCheckedOffice] = useState(false);
  const [isCheckedConstruction, setCheckedContruction] = useState(false);




  const filteredPressed = () => {
    setIsFiltered(!isFiltered)
  }


  return (
    <GestureHandlerRootView className="bg-white">
      <SafeAreaView className="h-screen max-w-full">

        <View className="flex flex-row w-full justify-between m-3 h-14">
          <View className="w-1/3 object-contain">
            <Image source={require('./images/kcal logo.png')} className=" max-h-full max-w-full" resizeMode="contain"/>
          </View>
          
          <View className=" flex flex-row justify-around w-1/2 max-h-full mr-4">
            <TouchableOpacity className="object-contain w-1/3">
              <Image source={require('./images/gps.png')} className="max-h-full max-w-full" resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity className="object-contain w-1/3">
              <Image source={require('./images/search.png')} className="max-h-full max-w-full" resizeMode="contain"/>
            </TouchableOpacity>
            <TouchableOpacity className="object-contain w-1/3" onPress={filteredPressed}>
              <Image source={require('./images/filter.png')} className="max-h-full max-w-full" resizeMode="contain"/>
            </TouchableOpacity>
          </View>
        </View>
        {!isFiltered && (
        <View className="h-auto items-center z-10 mx-4">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Floor 1"
              className="border-2"
            />
        </View>
        )}

        {isFiltered && (
        <View className="z-9 h-auto w-screen flex flex-row justify-around mt-3">
          <View className="">
            <Checkboxes department={"Engineering"} checked={isCheckedEngineering} onSendCheck={setCheckedEngineering}/>
            <Checkboxes department={"AV"} checked={isCheckedAV} onSendCheck={setCheckedAV}/>
            <Checkboxes department={"Cosmetology"} checked={isCheckedCosmo} onSendCheck={setCheckedCosmo}/>
            <Checkboxes department={"KCA"} checked={isCheckedKCA} onSendCheck={setCheckedKCA}/>
            <Checkboxes department={"Adult Transition"} checked={isCheckedAdultTransition} onSendCheck={setCheckedAdultTransition}/>
            <Checkboxes department={"Health Science"} checked={isCheckedHealthScience} onSendCheck={setCheckedHealthScience}/>
            <Checkboxes department={"Law"} checked={isCheckedLaw} onSendCheck={setCheckedLaw}/>
          </View>
          <View>
            <Checkboxes department={"Animal Science"} checked={isCheckedAnimalScience} onSendCheck={setCheckedAnimalScience}/>
            <Checkboxes department={"Architecture"} checked={isCheckedArchitecture} onSendCheck={setCheckedArchitecture}/>
            <Checkboxes department={"Welding"} checked={isCheckedWelding} onSendCheck={setCheckedWelding}/>
            <Checkboxes department={"IT"} checked={isCheckedCS} onSendCheck={setCheckedCS}/>
            <Checkboxes department={"Culinary"} checked={isCheckedCulinary} onSendCheck={setCheckedCulinary}/>
            <Checkboxes department={"Office"} checked={isCheckedOffice} onSendCheck={setCheckedOffice}/>
            <Checkboxes department={"Construction"} checked={isCheckedConstruction} onSendCheck={setCheckedContruction}/>
          </View>
        </View>
        )}
        <View className="h-3/5 w-screen z-1">
          {(value == 'Floor 2') ? <SecondFloor 
          isCheckedEngineering={isCheckedEngineering}
          isCheckedAV={isCheckedAV}
          isCheckedCosmo={isCheckedCosmo}
          isCheckedKCA={isCheckedKCA}
          isCheckedAdultTransition={isCheckedAdultTransition}
          isCheckedHealthScience={isCheckedHealthScience}
          isCheckedAnimalScience={isCheckedAnimalScience}
          isCheckedArchitecture={isCheckedArchitecture}
          isCheckedWelding={isCheckedWelding}
          isCheckedCS={isCheckedCS}
          isCheckedCulinary={isCheckedCulinary}
          isCheckedLaw={isCheckedLaw}
          isCheckedOffice={isCheckedOffice}
          isCheckedConstruction={isCheckedConstruction}
          isFiltered={isFiltered}
          /> : 
          <Floor
          isCheckedEngineering={isCheckedEngineering}
          isCheckedAV={isCheckedAV}
          isCheckedCosmo={isCheckedCosmo}
          isCheckedKCA={isCheckedKCA}
          isCheckedAdultTransition={isCheckedAdultTransition}
          isCheckedHealthScience={isCheckedHealthScience}
          isCheckedAnimalScience={isCheckedAnimalScience}
          isCheckedArchitecture={isCheckedArchitecture}
          isCheckedWelding={isCheckedWelding}
          isCheckedCS={isCheckedCS}
          isCheckedCulinary={isCheckedCulinary}
          isCheckedLaw={isCheckedLaw}
          isCheckedOffice={isCheckedOffice}
          isCheckedConstruction={isCheckedConstruction}
          isFiltered={isFiltered}
          />}
        </View>
        <View className="h-2/6 w-full z-10">
            

        </View>
      </SafeAreaView>
    </GestureHandlerRootView>   

  );
}


const styles = StyleSheet.create({
  filtered: {
    visibility: 'hidden',
  },
});