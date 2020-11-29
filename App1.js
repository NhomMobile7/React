import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import ListProducts from './screens/Product/ListProducts';
import Index from './screens/Index';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ListBill from './screens/Bill/ListBill';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Tab.Navigator
      //     tabBarOptions={{
      //       labelStyle:{
      //         fontSize:30,
      //         fontWeight:'bold',
      //       },
      //       activeTintColor:'red',
      //       inactiveTintColor:'black'
      //     }}
      //   >
      //     <Tab.Screen name="List" component={View} options={{
      //       tabBarLabel:'Home!!!'
      //     }}/>
      //     <Tab.Screen name='Add' component={View}/>
      //   </Tab.Navigator>
      // </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='Home' component={ListProduct}/>
      //     <Stack.Screen name='AddProduct' component={AddProduct} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      // <View style={{flex:1}}>
      //   <ListProduct />
      //   <ListProduct />
      //   <ListProduct />
      // </View>
      <View style={{flex:1}}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Index}/>
              <Stack.Screen name='ListProducts' component={ListProducts}/>
              <Stack.Screen name='ListBill' component={ListBill} />
            </Stack.Navigator>
        </NavigationContainer>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default App;

