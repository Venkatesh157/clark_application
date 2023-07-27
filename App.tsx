import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './src/screens/Profile/Profile';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ProductList from './src/screens/ProductList/ProductList';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product List" component={ProductList} />
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Products" component={ProductStack} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  viewContainer: {
    flex: 1,
  },
});

export default App;
