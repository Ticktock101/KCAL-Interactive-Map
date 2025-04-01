import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Animated, Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

const Checkoxes = React.memo(({department, checked, onSendCheck }) => {

    const [isChecked, setIsChecked] = useState(checked);

    const sendDataToParent = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        onSendCheck(newCheckedState);
    };

    return (
        <View className="flex flex-row my-1">
            <Checkbox
                value={isChecked} 
                onValueChange={sendDataToParent}
                color={'black'}
            />
            <Text className='mx-2'>
                {department}
            </Text>
        </View>
    );
});



export default Checkoxes;
