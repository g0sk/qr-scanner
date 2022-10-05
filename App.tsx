import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Scanner from './components/Scanner';
import Generator from './components/Generator';
import AuthorInfo from './components/AuthorInfo';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={styles.author}>
				<AuthorInfo />
			</View>
			<View style={styles.sectionContainer}>
				<View style={styles.section}>
					<Scanner />
				</View>
				<View style={styles.section}>
					<Generator />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	author: {
		marginTop: 30
	},
	sectionContainer: {
		marginVertical: 50,
		height: 600,
		padding: 40,
		flexDirection: 'column',
		alignItems: 'center'
	},
	section: {
		marginBottom: 50
	}
});
