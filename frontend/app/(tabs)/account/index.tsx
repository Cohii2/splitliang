import {StyleSheet, Text, View} from "react-native";

export default function Index() {
    return (
        <View style={styles.screenContainer} >
            <Text>This is the account page.</Text>
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
