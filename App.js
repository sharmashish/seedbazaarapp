/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator,  DrawerContentScrollView, DrawerItem,} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  
} from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Components/Index/Login';

import Splashscreen from './Components/Index/Splashscreen'; 
import Register from './Components/Index/Register';
import Forgetpassword from './Components/Index/Forgetpassword';
import Home from './Components/Seller/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: '#fff',
    background: '#1b3c59',
    card: '#1b3c59',
    text: '#fff',
    // border: 'rgb(199, 199, 204)',
  },
};

// function sellerDashboardDrawer(){
//   return(
//     <Stack.Navigator initialRouteName="Login" headerMode="none">
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Register" component={Register} />
//       <Stack.Screen name="Forgetpaswword" component={Forgetpassword} />
//       <Stack.Screen name="Splashscreen" component={Splashscreen} />
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// }

// function DashboardDrawer() {
//   return(
//     <Drawer.Navigator initialRouteName="Login">
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="Register" component={Register} />
//       <Drawer.Screen name="Forgetpassword" component={Forgetpassword} />
//       <Drawer.Screen name="Splashscreen" component={Splashscreen} />
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }


const App: () => React$Node = () => {
  return (
    <>
     <NavigationContainer theme={MyTheme}>
       <Stack.Navigator initialRouteName="Splashscreen" headerMode="none">
         <Stack.Screen name="Splashscreen" component={Splashscreen} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
         <Stack.Screen name="Home" component={Home} />
         {/* <Stack.Screen name="Login" component={DashboardDrawer} /> */}

       </Stack.Navigator>
     </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
