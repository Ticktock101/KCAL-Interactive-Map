import { Text, View, SafeAreaView, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
import Header from "./component/header";
import Floor from "./component/floor";
import React, { useState } from 'react';
import SecondFloor from "./component/secondFloor";
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


  return (
    <GestureHandlerRootView className="bg-white">
      <SafeAreaView className="h-screen max-w-full">

        <View className="flex flex-row w-auto justify-between m-4">
          <View className="">
            <Image source={require('./images/favicon.png')} className=" "/>
          </View>
          
          <View className=" flex flex-row justify-around w-1/2">
            <TouchableOpacity>
              <Image source={require('./images/favicon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./images/favicon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./images/favicon.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-auto items-center z-10 mx-4">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Floor 1"
            />
        </View>
        <View className="h-3/5 w-screen z-1">
        {(value == 'Floor 2') ?   <SecondFloor/> : <Floor/>}
        </View>
        <View className="h-2/6 w-full z-10">
            

        </View>
      </SafeAreaView>
    </GestureHandlerRootView>   

  );
}
