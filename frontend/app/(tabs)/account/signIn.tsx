import {StyleSheet, Text, View} from "react-native";

export default function SignIn() {
    return (
        <View style={styles.screenContainer} >
            <Text>This is the sign-in page.</Text>
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
