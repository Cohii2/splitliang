import {Image, StyleSheet, View} from "react-native";
import {Button, Text} from "react-native-paper";
import {useRouter} from "expo-router";
import {AuthContextType, useAuth} from "@/features/auth/AuthContext";
import LoadingBadge from "@/components/LoadingBadge";

export default function Account() {
    const { user, errorMessage, isLoading, login, signup, logout }: AuthContextType = useAuth();
    const router = useRouter();

    const onLogOut = (): void => {
        logout().then(r => console.log("User logged out."));
    }

    return (
        <>
            {user && <View style={styles.screenContainer} >
                <View style={styles.imageContainer}>
                    <View style={styles.circle} />
                    <Image
                        source={require("../../assets/images/img_pfp.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <Text
                    variant="titleLarge"
                    style={styles.title}
                >
                    {`Welcome, ${user.username}!`}
                </Text>
                <Button
                    icon="logout-variant"
                    mode="contained"
                    onPress={() => onLogOut()}
                    style={styles.button}
                >
                    Log Out
                </Button>
            </View>}

            {user === null && <View style={styles.screenContainer} >
                <View style={styles.imageContainer}>
                    <View style={styles.circle} />
                    <Image
                        source={require("../../assets/images/img_account.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <Text
                    variant="titleLarge"
                    style={styles.title}
                >
                    Log in or sign up to use Splitliang.
                </Text>
                <Button
                    icon="login-variant"
                    mode="contained"
                    onPress={() => router.push("(non-tabs)/auth/login")}
                    style={styles.button}
                >
                    Log In
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => router.push("(non-tabs)/auth/signup")}
                    style={styles.button}
                >
                    Sign up
                </Button>
            </View>}
            {isLoading && <View style={styles.opacity}>
                <LoadingBadge />
            </View>}
        </>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "40%",
        aspectRatio: 1,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
    },
    circle: {
        position: "absolute",
        width: "80%",
        height: "80%",
        backgroundColor: "beige",
        borderRadius: "50%",
    },
    title: {
        padding: 10,
        textAlign: "center",
    },
    button: {
        margin: 5,
        width: "30%",
    },
    opacity: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
});
