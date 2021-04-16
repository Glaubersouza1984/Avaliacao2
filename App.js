import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebView} from 'react-native-webview';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
 <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Vídeo 1"
      component={Tela01}></Tab.Screen>
    <Tab.Screen name="Vídeo 2"
      component={Tela02}></Tab.Screen>
    </Tab.Navigator>
</NavigationContainer>
  );
}

function Tela01(){
  return(
    <WebView style={{flex:1, marginTop:230, marginBottom:230}} javaScriptEnabled={true} source={{html:"<html><boby><iframe width='960' height='700' src='https://www.youtube.com/embed/EdzMSFm7NAk' frameborder='0' allowfullscreen> </iframe></body></html>"}}
></WebView>
  );
}

function Tela02(){
  return(
    <WebView style={{flex:1}} javaScriptEnable={true} source={{uri: 'https://www.youtube.com/watch?v=nUnR8Q_hF4U&list=PLx4x_zx8csUgB4R1dDXke4uKMq-IrSr4B&index=2'}}></WebView>
 );
}
