import {AuthContextType, useAuth} from "@/features/auth/AuthContext";
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-paper";
import LoadingBadge from "@/components/LoadingBadge";

export default function LogIn() {
    const { user, errorMessage, isLoading, login, logout }: AuthContextType = useAuth();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

    return (
        <>
            {user && <View style={styles.screenContainer} >
                <Text>This is the sign in page.</Text>
            </View>}
            {user === null && <View style={styles.screenContainer} >
                <TextInput
                    mode="outlined"
                    label="Username"
                    text={username}
                    onChangeText={text => setUsername(text)}
                />
                <View style={{ height: 10 }} />
                <TextInput
                    mode="outlined"
                    label="Password"
                    text={password}
                    secureTextEntry={isPasswordHidden}
                    right={
                        <TextInput.Icon
                            icon="eye"
                            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                        />
                    }
                    onChangeText={text => setPassword(text)}
                />
                <Text>{errorMessage}</Text>
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
        padding: 12,
    },
    opacity: {
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
});
