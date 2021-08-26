import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import styles  from '../css/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Music({ navigation }) {
	const pressHandler = () => {
		navigation.navigate('Home')
	}
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					<FontAwesome name="play" size={30} color="white" /> 
					<Text style={{fontSize:30}}>Choose a song</Text>					
				</Text>
				<Button title='Go To Home Screen' onPress={pressHandler} />
			</View>
		</SafeAreaView>
	)	
}