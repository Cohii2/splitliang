import {AuthContextType, useAuth} from "@/features/auth/AuthContext";
import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TextInput, Text, Button} from "react-native-paper";
import LoadingBadge from "@/components/LoadingBadge";
import {useRouter} from "expo-router";

export default function Signup() {
    const { user, errorMessage, isLoading, login, signup, logout }: AuthContextType = useAuth();

    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

    const onSignupButtonPress = () => {
        signup(username, password).then(r => {
            console.log("Sign up successful.");
            router.replace("(tabs)/account");
        });
    };

    return (
        <>
            {user && <>
                <View style={styles.inputContainer}>
                    <View style={{ flex: 1 }} />
                    <Text variant="titleLarge" style={styles.title}>{`You are logged in as ${user.username}.`}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="text" onPress={() => router.replace("(tabs)/account")} >Return to Account page</Button>
                </View>
            </>}
            {user === null && <>
                <View style={styles.inputContainer} >
                    <View style={{ flex: 1 }} />
                    {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                    <TextInput
                        mode="outlined"
                        label="Set Username"
                        text={username}
                        style={styles.textInput}
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Set Password"
                        text={password}
                        style={styles.textInput}
                        secureTextEntry={isPasswordHidden}
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                            />
                        }
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        icon="login-variant"
                        mode="contained"
                        style={styles.button}
                        onPress={() => {onSignupButtonPress()}}
                    >
                        Sign Up
                    </Button>
                    <Button
                        mode="text"
                        style={styles.button}
                        onPress={() => {router.push("(non-tabs)/auth/login")}}
                    >
                        Log In
                    </Button>
                </View>
            </>}
            {isLoading && <View style={styles.opacity}>
                <LoadingBadge />
            </View>}
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center",
    },
    errorMessage: {
        color: "red",
        paddingHorizontal: 10,
    },
    textInput: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    button: {
        marginVertical: 5,
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
