import React from 'react';
import {
	Button,
	Keyboard,
	StyleSheet,
	TextInput,
	View,
	SafeAreaView,
} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import Header from '../header/headerLoginPage';
import Constants from 'expo-constants';

const SearchBar = (props) => {
	const navigation = useNavigation();

	return (
		<SafeAreaView
			style={
				!props.clicked
					? styles.screen__unclicked
					: styles.screen__clicked
			}
		>
			<Header />
			<View style={styles.container}>
				<View
					style={
						!props.clicked
							? styles.searchBar__unclicked
							: styles.searchBar__clicked
					}
				>
					{/* Search Icon */}
					<Feather
						name='search'
						size={20}
						color='black'
						style={{ marginLeft: 1 }}
					/>
					{/* Input Field */}
					<TextInput
						style={styles.input}
						placeholder='Search'
						value={props.searchPhrase}
						onChangeText={props.setSearchPhrase}
						onFocus={() => {
							props.setClicked(true);
						}}
					/>
					{/* cross Icon, depending on whether the search bar is clicked or not */}
					{props.clicked && (
						<Entypo
							name='cross'
							size={20}
							color='black'
							style={{ padding: 1 }}
							onPress={() => {
								props.setSearchPhrase('');
							}}
						/>
					)}
				</View>
				{/* cancel button, depending on whether the search bar is clicked or not */}
				{/* {props.clicked && (
				<View>
					<Button
						title='Cancel'
						onPress={() => {
							Keyboard.dismiss();
							props.setClicked(false);
                            navigation.navigate('Stocks');
						}}
					></Button>
				</View>
			)} */}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen__unclicked: {},
	screen__clicked: {
		marginTop: Constants.statusBarHeight,
		paddingTop: 20,
	},
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
	},
	searchBar__unclicked: {
		padding: 10,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#d9dbda',
		borderRadius: 15,
		alignItems: 'center',
	},
	searchBar__clicked: {
		padding: 10,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#d9dbda',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	input: {
		fontSize: 20,
		marginLeft: 10,
		width: '90%',
	},
});

export default SearchBar;
