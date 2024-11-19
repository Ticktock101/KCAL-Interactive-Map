import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from "@/constants/Colors";

export default function Header({}) {

  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: "Floor 1",
    value: 'floor1',
  };

  const options = [
    // { label: 'Floor 1', value: 'floor1' },
    { label: 'Floor 2', value: 'floor2' },
  ];

    return (
      <View className="flex flex-row justify-between h-full max-w-full">        
        <View className="flex align-between justify-between bg-white">
          <TouchableOpacity>
            <Image source={require('../images/favicon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/favicon.png')}/>
          </TouchableOpacity>
        </View>
        <View className="h-auto flex flex-auto border-2 items-center">
            <RNPickerSelect
              placeholder={placeholder}
              items={options}
              onValueChange={(value) => setSelectedValue(value)}
              value={selectedValue}
              // style={styles.bigBlue}
            />
          
        </View>
        <View className="flex align-between justify-between bg-white">
          <TouchableOpacity>
            <Image source={require('../images/favicon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/favicon.png')}/>
          </TouchableOpacity>
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
  