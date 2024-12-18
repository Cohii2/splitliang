import {StyleSheet, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";

export default function LoadingBadge() {
    return (
        <View style={styles.opacity}>
            <View style={styles.container}>
                <ActivityIndicator animating={true} color="purple" size="large" />
            </View>
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
    opacity: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
});
