import {AuthContextType, useAuth} from "@/features/auth/AuthContext";
import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TextInput, Text, Button} from "react-native-paper";
import LoadingBadge from "@/components/LoadingBadge";
import {useRouter} from "expo-router";

export default function Login() {
    const { user, errorMessage, isLoading, login, signup, logout }: AuthContextType = useAuth();

    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

    const onLogInButtonPress = () => {
        login(username, password).then(r => {
            console.log("Log in successful.");
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
                        label="Username"
                        text={username}
                        style={styles.textInput}
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
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
                        onPress={() => {onLogInButtonPress()}}
                    >
                        Log In
                    </Button>
                    <Button
                        mode="text"
                        style={styles.button}
                        onPress={() => router.push("(non-tabs)/auth/signup")}
                    >
                        Sign Up
                    </Button>
                </View>
            </>}
            {isLoading && <LoadingBadge />}
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
});
