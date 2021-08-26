import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#20232A'
	},
	viewRow: {
		display: 'flex',
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	defaultColor: {
		color: '#ffffff',
		textAlignVertical:'center'
	},
	burgerMenu: {
		backgroundColor: '#20232a',
		color: '#ffffff'
	},
	header: {
		width: '100%',
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingRight: 20
	},
	pixabayContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'flex-start'
	},
	inputField: {
		backgroundColor: 'white',
		padding: 10,
		color: '#20232A',
		borderRadius: 20,
		marginBottom: 20,
		width: 370
	}
})