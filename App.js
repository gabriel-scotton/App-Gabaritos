//#region imports
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { flex, styles } from './Styles';
import {Dimensions} from 'react-native';
import { width } from 'dom-helpers';
import Icon from "react-native-vector-icons/FontAwesome";

//#endregion
//#region MUI ICONS

//#endregion
import { Logs } from 'expo'
import { Button } from '@rneui/themed'


Logs.enableExpoCliLogging()

export const arraytest = [1,2,3,4,5,6,7]

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
    <View style={[styles.background_purple]}>
      <View style={[styles.color_white, {flex:1}]}>
        

      </View>
      <View style={{flex:3}}>
        <Text style={[styles.color_white, styles.align_center, styles.title_text]}>Bem vindo</Text>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 4 }}>
        <ScrollView horizontal={true} styles={{ flexDirection: 'row', flexWrap: 'wrap',marginHorizontal: "auto", }} >
          {arraytest.map(i => {
            return <View style={{flex: 1, flexDirection:"column"}}>
              <View style={{
                flex: 2, backgroundColor: (i % 2 === 0 ? 'black' : 'white'),
                minWidth: 100,
                maxWidth: 100,
                minHeight: 100,
                maxHeight: 100,}}></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.color_white}>Turma {i}</Text>
              </View>
            </View>;
          })          
              
            
          }

        </ScrollView>
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 3, flexDirection: 'row' }}>
            
          <View style={{ flex: 4 }}></View >
            
          <Button
          title="Provas"
          type="solid"
            buttonStyle={[{ flex: 4 }, styles.buttonLarge,
              styles.backgroundcolors_blue,
              styles.buttonLargeOnPurpleBackground]}
          />
          <View style={{ flex: 4 }}></View >
            
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={{ flex: 4 }}></View >
          
          <Button
          title="Nova Prova"
          type="solid"
            buttonStyle={[{ flex: 4 }, styles.buttonLarge,
              styles.backgroundcolors_blue,
              styles.buttonLargeOnPurpleBackground]}
          />
          <View style={{ flex: 4 }}></View >
        </View>
        <View style={{ flex: 2 }}></View>

      </View>
        
    </View>
    
    
  );
}


