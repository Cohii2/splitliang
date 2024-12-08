import {StyleSheet, Text, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";

export default function LoadingBadge() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating={true} color="purple" size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
