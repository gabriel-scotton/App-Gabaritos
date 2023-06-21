import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../Styles';
import * as React  from 'react'
import { Button, Input } from '@rneui/themed'

export default function NewQuestionScreen()  {
  
  return (
    <View style={[styles.ScreenBackground]}>
      <View style= {{flex:2}}></View>
      <View style={{ flex: 7, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}></View>
        <View style={[{ flex: 10 }, styles.backgroundGray, styles.roundBorderLargeOnPurpleBackground]}>
          <View style={{ flex: 2, flexDirection:'row' }}>
            <Text style={[{ flex: 4 }, styles.align_center, styles.grayCardTitle ]}>Questão n</Text>
            <Text style={[{ flex: 4 }, styles.align_center, styles.grayCardTitle]}>Questao do Boi</Text>
            <Text style={[{ flex: 4 }, styles.align_center, styles.grayCardTitle]}>Tipo da Questão</Text>
          </View>
          <View style={[{ flex: 3, flexDirection: 'row' }, styles.align_center]}>
            <Text style={[{ flex: 4 }, styles.align_center, styles.grayCardTitle]}>Nome{"\n"} (opcional)</Text>
            <View style={[{ flex: 7 }, styles.align_center, styles.background_black,
            styles.roundBorderSmallOnGrayBackground]}>
              <Input
                placeholder='Questao do Boi'
                placeholderTextColor={'gray'} />
              
            </View>
            <View style= {{flex:1}}></View>
                    
          </View>
          <View style={[{ flex: 7, flexDirection: 'row' }, styles.align_center]}></View>
        </View>
        
        <View style= {{flex:1}}></View>

      </View>
      <View style ={{flex:3}}></View>    
      </View>
        
        
    );
  
}