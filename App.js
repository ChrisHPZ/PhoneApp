import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Home, Music, Dragons, Pixabay, Contact } from './screens/Screens';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
	drawerFontStyle: {
		fontSize: 20
	}
})

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
				drawerStyle={{
					backgroundColor: 'rgba(193, 33, 84, 0.9)'
				}}
				drawerContentOptions={{
					activeTintColor: '#ffffff',
					activeBackgroundColor: '#000000',
					inactiveTintColor: '#ffffff',
					labelStyle: styles.drawerFontStyle
				}}>
				<Drawer.Screen name="Home" 
					component={Home} 
					options={{ 
						headerShown: true,
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons name="home" size={size} color={ focused ? '#ffffff' : '#ffffff' } />
						)
					}} 
				/>
				<Drawer.Screen name="Music" 
					component={Music} 
					options={{ 
						headerShown: true,
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons name="play-circle-filled" size={size} color={ focused ? '#ffffff' : '#ffffff' } />
						)
					}} 
				/>
				<Drawer.Screen name="Dragons" 
					component={Dragons} 
					options={{
						headerShown: true,
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons name="image" size={size} color={ focused ? '#ffffff' : '#ffffff' } />
						)
					}} 
				/>
				<Drawer.Screen name="Pixabay" 
					component={Pixabay} 
					options={{ 
						headerShown: true,
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons name="collections" size={size} color={ focused ? '#ffffff' : '#ffffff' } />
						)
					}} 
				/>
				<Drawer.Screen name="Contact" 
					component={Contact} 
					options={{ 
						headerShown: true,
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons name="contact-mail" size={size} color={ focused ? '#ffffff' : '#ffffff' } />
						)
					}} 
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
	
export default App;