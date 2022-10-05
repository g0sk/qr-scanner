import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Generator: FC = () => {
	return (
		<TouchableOpacity onPress={() => null}>
			<View style={styles.container}>
				<View style={styles.title}>
					<Text>Generator</Text>
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

export default Generator;
