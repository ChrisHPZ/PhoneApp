import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Music from '../screens/Music';

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'App Zone'
		}
	},
	Music: {
		screen: Music,
		navigationOptions: {
			title: 'Music Zone'
		}
	}
}
const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: {
			backgroundColor: '#eee',
			height: 60,
		}
	}
});

export default HomeStack;