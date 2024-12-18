import {StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";

export default function Index() {
    return (
        <View style={styles.screenContainer} >
            <Text>This is the home page.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
