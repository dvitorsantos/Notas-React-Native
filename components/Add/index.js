import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import getRealm from '../../services/realm'
import { NavigationContainer } from '@react-navigation/native';
function Add( { navigation } ) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function saveNote(title, description) {
        const data = {
            title: title,
            description: description
        }
        
        const realm = await getRealm()

        realm.write(() => {
            realm.create('nota', data)
        })
    }

    async function handleAddNote() {
        await saveNote(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.addBox}>
                    <Text style={styles.label}>Note name</Text>
                    <TextInput
                        style={styles.inputTitle}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={styles.label}>Note description</Text>
                    <TextInput
                        style={styles.inputDescription}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <View style={styles.addButton}>
                        <TouchableOpacity onPress={handleAddNote}>
                            <Text style={{ color: '#A1D7BC', fontWeight: 'bold' }}>Add</Text>
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
        addBox: {
            backgroundColor: '#69BF93',
            marginHorizontal: 20,
            borderRadius: 20,
            padding: 20,
        },
        inputTitle: {
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginBottom: 10,
        },
        inputDescription: {
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginBottom: 10,
            paddingBottom: 100
        },
        addButton: {
            backgroundColor: '#ffffff',
            width: 40,
            height: 40,
            marginLeft: 270,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        label: {
            color: '#ffffff',
            fontWeight: 'bold',
            marginLeft: 10
        }
    }
)

export default Add;