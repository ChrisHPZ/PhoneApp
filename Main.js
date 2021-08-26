import React, { Component } from 'react'
import { Navigator, NativeModules } from 'react-native'
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui'

const uiTheme = {
	palette: {
		primaryColor: Color.green500,
	},
	toolbar: {
		container: {
			height:50
		}
	}
};

function Main() {
	return (
		<ThemeContext.Provider value={getTheme(uiTheme)}>
			<App />
		</ThemeContext.Provider>
	)
}

export default Main;