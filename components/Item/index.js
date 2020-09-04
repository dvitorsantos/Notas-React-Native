import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Item({ route }) {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.noteBox}>
          <Text style={styles.title}>{route.params?.title}</Text>
          <Text style={styles.description}>{route.params?.description}</Text>
          <View style={styles.deleteButton}>
            <TouchableOpacity>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: '#A1D7BC'
    },
    noteBox: {
      backgroundColor: '#ffffff',
      marginHorizontal: 20,
      borderRadius: 10,
      flex: 1,
      marginVertical: 200
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 10
    },
    description: {
      marginLeft: 20
    },
    deleteButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#69BF93',
      bottom: 10,
      right: 10,
      position: 'absolute'
    }
  }
)

export default Item;