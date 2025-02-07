import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from "../Screens/Feed";
import Settings from "../Screens/Settings";
import Notifications from "../Screens/Notifications";
// import { Settings } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TweetDetailsScreen from "../Screens/HomeStack/TweetDetailsScreen";
import EvilIcons from "@react-native-vector-icons/evil-icons";
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
type RootTabParamList = {
    Feed: undefined;
    Settings: undefined;
    Notifications: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeStack = createNativeStackNavigator();
const HomeStackGroup = () => {
    return (
        <HomeStack.Navigator>

            <HomeStack.Screen component={Feed} name="Feed" />
            <HomeStack.Screen component={TweetDetailsScreen} name="TweetDetailsScreen" />
        </HomeStack.Navigator>
    );
}
const TabGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList> }) => ({
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#888888',
            })}>
            <Tab.Screen name="Feed" component={Feed} options={{
                tabBarIcon: ({ focused }) => <FontAwesome6Icon
                    name="house"
                    color={focused ? "#000000" : "#888888"}
                    size={24}
                />
            }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{
                tabBarIcon: ({ focused }) => <FontAwesome6Icon
                    name="bell"
                    color={focused ? "#000000" : "#888888"}
                    size={24}
                />
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ focused }) => <FontAwesome6Icon
                    name="gear"
                    color={focused ? "#000000" : "#888888"}
                    size={24}
                />
            }} />
        </Tab.Navigator>
    );
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    );
}
export default Navigation;