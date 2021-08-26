import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import { HomeStack } from '../routes/homeStack';
import { AboutStack } from '../routes/aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack,
	},
	About: {
		screen: AboutStack
	}
})

export default createAppContainer()