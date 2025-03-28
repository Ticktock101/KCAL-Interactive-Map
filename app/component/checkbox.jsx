import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Animated, Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

const Checkoxes = ({department, checked, onSendCheck }) => {

    const [isChecked, setIsChecked] = useState(checked);

    const sendDataToParent = () => {
        setIsChecked(!isChecked)
        onSendCheck(isChecked);
    };

    return (
        <View className="flex flex-row">
            <Checkbox
                value={isChecked} 
                onValueChange={sendDataToParent}
            />
            <Text>
                {department}
            </Text>
        </View>
    );
}



export default Checkoxes;
