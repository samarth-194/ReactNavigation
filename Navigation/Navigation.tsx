import {  NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from "../Screens/Feed";
import Settings from "../Screens/Settings";
import Notifications from "../Screens/Notifications";
// import { Settings } from "react-native";

const Tab=createBottomTabNavigator();

const TabGroup = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Feed" component={Feed}/>
            <Tab.Screen name = "Notifications" component={Notifications}/>
            <Tab.Screen name = "Settings" component={Settings}/>

            
        </Tab.Navigator>
    );
}


const Navigation=()=>{
    return(
        <NavigationContainer>
            <TabGroup/>

        </NavigationContainer>
    );
}
export default Navigation;