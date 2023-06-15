//#region imports
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//#endregion
//#region ICONS

//#endregion
import { Logs } from 'expo'
import { Button } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './Screens/StartScreen';

const Stack = createNativeStackNavigator();

Logs.enableExpoCliLogging()



export const screenWidth = (x) => StyleSheet.create({
  changeWidth: {
    width: Dimensions.get('screen').width * x
  }  
});
export const screenHeight = (x) => StyleSheet.create({
  changeHeight: {
    height: Dimensions.get('screen').height * x
  }  
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Start"
          component={StartScreen}
        ></Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
    
    
    
    
  );
}


