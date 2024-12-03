import { StyleSheet, Text, View } from "react-native";
import {Button} from "react-native-paper";

export default function Index() {
    return (
        <View
            style={styles.screenContainer}
        >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Button icon="account" mode="contained" onPress={() => console.log("Pressed test button")}>
                Test Button
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
