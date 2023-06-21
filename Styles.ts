import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  ScreenBackground: {
    flex: 1,
    backgroundColor: '#363062',
    
  },
  background_purple: {
    backgroundColor: '#363062',
    color:'white'
    
  },
  background_black: {
    backgroundColor: 'black',
    color:'white'
    
    },
    color_white: {
      color: 'white',
  },
  align_center: {
      alignItems: 'center',
      textAlign: 'center',
      flexDirection:'row'
  },
  title_text: {
    fontSize: 60
  },
  backgroundcolors_blue: {
    backgroundColor: '#0967AC',
    color: 'white'
  },
  buttonLarge: {
    fontSize: 30,
    minWidth: 150,
    maxWidth: 150
  },
  roundBorderLargeOnPurpleBackground: {
    borderColor: '#363062',
    borderRadius: 30
  },
  roundBorderSmallOnGrayBackground: {
    borderColor: '#D9D9D9',
    borderRadius: 10
  },
  backgroundGray: {
    color: 'black',
    backgroundColor: '#D9D9D9'
  },
  grayCardTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});
export function flex(num: number, flexDirection) {
  return StyleSheet.create({
    flex: {
      flex: num,
      flexDirection: flexDirection,
    }

  })
}