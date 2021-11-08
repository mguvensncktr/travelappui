import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailScreen from '../screens/DetailScreen';

//Icons and constants
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Root"} component={BottomTab} />
                <Stack.Screen name={"Details"} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.orange,
            tabBarInactiveTintColor: colors.gray,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: colors.white,
            }
        }}>
            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={32} />
                    )
                }} />
            <Tab.Screen
                name={"Favourite"}
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="heart" color={color} size={32} />
                    )
                }} />
            <Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={32} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Router;