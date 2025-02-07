import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";


const Notifications=()=>{
    return(
        <SafeAreaView>
            <FontAwesome6Icon name="comments" color="#000000"size={100} />;
            <EvilIcons
            name="clock"color="#000000" size={100}
            />
            <Text>This is the NewScreen.</Text>
        </SafeAreaView>
    );

}
export default Notifications;