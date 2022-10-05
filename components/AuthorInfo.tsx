import { FC, useState } from 'react';
import { Alert, View, Text, TouchableHighlight } from 'react-native';

const AuthorInfo: FC = () => {
	const [pressedTimes, setPressedTimes] = useState<number>(0);

	const updatePressed = () => {
		if (pressedTimes === 2) {
			setPressedTimes(0);
			showAlert();
		} else {
			setPressedTimes((pressed) => pressed + 1);
		}
	};

	const showAlert = () => Alert.alert('Author', 'Made by g0$k');

	return (
		<View>
			<TouchableHighlight onPress={() => updatePressed()}>
				<Text> QR SCANNER</Text>
			</TouchableHighlight>
		</View>
	);
};

export default AuthorInfo;
