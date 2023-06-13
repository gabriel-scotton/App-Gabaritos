import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  background_purple: {
    flex: 1,
    backgroundColor: '#363062',
    
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
  buttonLargeOnPurpleBackground: {
    borderColor: '#363062',
    borderRadius: 30
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