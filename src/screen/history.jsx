import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function ScreenHistory() {
    return (
        <View style={styles.container}>
            <Text>Hello, history!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })