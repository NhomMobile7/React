import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddProduct from './AddProduct'
import Header from '../../Components/Header';
import ListProducts from './ListProducts';
const Tab = createMaterialTopTabNavigator();
export default function TabNaviga() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ListProducts} />
            <Tab.Screen name='Add' component={View} />
        </Tab.Navigator>
    );
}