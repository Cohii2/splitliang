import {Stack} from "expo-router";

export default function NonTabsLayout () {
    return (
        <Stack>
            <Stack.Screen name="logIn" options={{ title: "Log In", }} />
        </Stack>
    );
};
