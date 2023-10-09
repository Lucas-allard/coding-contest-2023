import {View} from 'react-native';
import React from "react";
import Homepage from "./src/Application/Screens/Homepage/Homepage";

export default function App(): React.JSX.Element {
    return (
        <View className="py-6">
            <Homepage/>
        </View>
    );
}

