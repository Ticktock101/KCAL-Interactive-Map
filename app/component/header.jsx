import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from 'react';
import { Colors } from "@/constants/Colors";
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header({}) {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Floor1', value: 'Floor 1'},
    {label: 'Floor2', value: 'Floor 2'}
  ]);

    return (
      <View className="flex flex-row justify-center items-center w-5/6">        
      
        <View className="h-auto flex flex-auto items-center">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
        </View>
      </View >
    );
}

const styles = StyleSheet.create({

  bigBlue: {
    borderWidth: 3,
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
  