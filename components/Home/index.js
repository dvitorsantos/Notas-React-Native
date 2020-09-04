import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import getRealm from '../../services/realm'

import refreshIcon from '../../public/image/icons/refresh.png'
import plusIcon from '../../public/image/icons/plus.png'
import trashIcon from '../../public/image/icons/trash.png'

function Home({ navigation }) {

  const [notas, setNotas] = useState([])

  function deleteAction(title) {
    return (
      <View style={styles.deleteButton}>
        <TouchableOpacity onPress={() => { deleteFromDb(title) }}>
          <Image
            style={styles.deleteIcon}
            source={trashIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  async function reloadList() {
    const realm = await getRealm()

    const data = realm.objects('nota')

    setNotas(data)
  }

  async function deleteFromDb(title) {
    const realm = await getRealm()

    const data = realm.objectForPrimaryKey('nota', title)

    realm.write(() => {
      realm.delete(data)
    })

    const newData = realm.objects('nota')

    setNotas(newData)

  }

  const Item = ({ title, description }) => (
    <Swipeable renderLeftActions={() => deleteAction(title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Swipeable>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );


  useEffect(() => {
    async function loadNotes() {
      const realm = await getRealm()

      const data = realm.objects('nota')

      setNotas(data)
    }

    loadNotes()
  }, [])

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={notas}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
      <View style={styles.addButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
          <Image
            style={styles.addIcon}
            source={plusIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.reloadButton}>
        <TouchableOpacity onPress={reloadList}>
          <Image
            style={styles.refreshIcon}
            source={refreshIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1D7BC',
  },
  item: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Archivo-Bold'
  },
  description: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#69BF93',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
    bottom: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Archivo-Bold'
  },
  deleteButton: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  deleteText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff'
  },
  reloadButton: {
    backgroundColor: '#69BF93',
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
    bottom: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  refreshIcon: {
    width: 20,
    height: 20
  },
  addIcon: {
    width: 20,
    height: 20
  },
  deleteIcon: {
    width: 30,
    height: 30
  }
})

export default Home;