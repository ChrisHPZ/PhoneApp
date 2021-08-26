import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import styles  from '../css/Styles'
import Foundation from 'react-native-vector-icons/Foundation';

export default function Home() {
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					<Foundation name="camera" size={30} color="white" /> 
					<Text style={{fontSize:30}}> Smile, you're home</Text>
				</Text>
				<Text style={{fontSize:20,textAlign:'center',color:'#ffffff',padding:20}}>There's nothing to see here. Swipe to the right to navigate.</Text>
				<Button title='Go To Music' />
			</View>
		</SafeAreaView>
	)
}