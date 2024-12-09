import {Stack} from "expo-router";

export default function NonTabsLayout () {
    return (
        <Stack>
            <Stack.Screen name="auth/login" options={{ title: "Log In", }} />
            <Stack.Screen name="auth/signup" options={{ title: "Sign Up", }} />
        </Stack>
    );
};
