import React from 'react';
import { Text, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from '../css/Styles';

export default function Header({ navigation }) {
	const openMenu = () => {
		navigation.toggleMenu()
	}
	return(
		<View style={styles.header}>			
			<View>
				<Text>
					<Octicons 
						name="three-bars" 
						size={50} 
						color='#000000'
						onPress={openMenu}
					/>
				</Text>
			</View>
		</View>
	);
}