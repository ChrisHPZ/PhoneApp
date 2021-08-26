import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View, Image, FlatList, TextInput } from 'react-native';
import Button from 'react-native-button';
import styles  from '../css/Styles'
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

export const Header = ({ navigation }) => {
	return(
		<SafeAreaView style={styles.header}>
			<Text>
				<Octicons 
					name="three-bars" 
					size={50} 
					color='#000000'
					onPress={navigation.toggleDrawer()}
				/>
			</Text>
		</SafeAreaView>
	)
}

export const Home = () => {
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					<Foundation name="camera" size={30} color="white" /> 
					<Text style={{fontSize:30}}> Smile, you're home</Text>
				</Text>
				<Text style={{fontSize:20,textAlign:'center',color:'#ffffff',padding:20, lineHeight:45}}>
					This is an app that represents a continued study of React Native. Navigate around to see all the available options in this app.
				</Text>
			</View>
		</SafeAreaView>
	)
}

export const Music = () => {
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					<FontAwesome name="play" size={30} color="white" /> 
					<Text style={{fontSize:30}}>Choose a song</Text>					
				</Text>
			</View>
		</SafeAreaView>
	)
}

export const Dragons = () => {
	let pic = {
		uri: 'https://i.pinimg.com/originals/72/a0/fa/72a0faa36ed1f338578ea00d36ed9350.jpg'
	};
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>
					This is a picture of a Dragon
				</Text>
				<Image source={pic} style={{ width:293, height:210 }} />
			</View>
		</SafeAreaView>
	)
}

export const Pixabay = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const getPixabayImages = async () => {
		try {
			const response = await fetch('https://pixabay.com/api/?key=22822889-c8dc44160eef349ac428494da&q=dragons&order=latest');
			const json = await response.json();
			setData(json.hits);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		getPixabayImages();
	}, []);
	return(
		<SafeAreaView style={styles.container}>
			<View>
				{isLoading ? <ActivityIndicator /> : (
					<FlatList
						data={data}
						keyExtractor={({ id }, index) => id}
						renderItem={({ item }) => (
							<View style={styles.pixabayContainer}>
								<View style={{marginRight:15, marginBottom: 15}}>
									<Image source={{uri: item.previewURL}} style={{ width:150, height:100 }} />
								</View>
								<View style={styles.pixabayContent}>
									<Text style={{color:'#ffffff',fontSize:20}}>Author: {item.user}</Text>
									<Text style={{color:'#ffffff',fontSize:20}}>Likes: {item.likes}</Text>
								</View>								
							</View>
						)}
					/>
				)}
				<Text style={{fontSize:20,textAlign:'center',color:'#ffffff',padding:20, lineHeight:45}}>
					Pixabay
				</Text>
			</View>
		</SafeAreaView>
	)
}

export const Contact = () => {
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.viewRow}>
				<Text style={styles.defaultColor}>Contact</Text>
				<View>
					<TextInput placeholder="Name" style={styles.inputField} placeholderTextColor="#20232A" />
					<TextInput placeholder="Email" style={styles.inputField} placeholderTextColor="#20232A" />
					<TextInput placeholder="Message" numberOfLines={10} multiline={true} style={styles.inputField} placeholderTextColor="#20232A" />
					<Button
						style={{fontSize: 20, color: 'green', backgroundColor: '#ffffff', padding: 20, borderRadius: 20 }}
						styleDisabled={{color: 'red'}}>
						Send Message
					</Button>
      			</View>
    		</View>
		</SafeAreaView>
	)
}