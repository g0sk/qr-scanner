import { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Scanner: FC = () => {
	return (
		<TouchableOpacity onPress={() => null}>
			<View style={styles.container}>
				<View style={styles.title}>
					<Text>QrScanner</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 250,
		height: 250,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: 'black',
		justifyContent: 'center'
	},
	title: {
		alignItems: 'center'
	}
});

export default Scanner;
