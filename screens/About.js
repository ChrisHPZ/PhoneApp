import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import styles  from '../css/Styles';

export default function About({ navigation }) {
	const pressHandler = () => {
		navigation.navigate('Home')
	}
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					<Text style={{fontSize:30}}>About This App</Text>
				</Text>
				<Button title='Go To Home Screen' onPress={pressHandler} />
			</View>
		</SafeAreaView>
	)	
}