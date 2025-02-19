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
    {label: 'Floor1', value: 'Floor 1'},
    {label: 'Floor2', value: 'Floor 2'}
  ]);


  return (
    <GestureHandlerRootView className="bg-white">
      <SafeAreaView className="h-screen max-w-full">
        <View className="flex flex-row  h-auto w-auto">
          <TouchableOpacity>
            <Image source={require('./images/favicon.png')}/>
          </TouchableOpacity>
          <View className="flex-row">
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
        <View className="h-auto items-center z-10">
            {/* <Header /> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
        </View>
        <View className="h-3/5 w-screen z-1">
          {/* <Floor/> */}
          <SecondFloor/>
        </View>
        <View className="h-2/6 w-full z-10">
            

        </View>
      </SafeAreaView>
    </GestureHandlerRootView>

  );
}
