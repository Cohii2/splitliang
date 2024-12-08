import { Stack } from "expo-router";
import {MockAuthProvider} from "@/features/auth/MockAuthProvider";

export default function RootLayout() {
    return (
        <MockAuthProvider>
            <Stack>
                {/* Tab screens */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* Non-tab screens */}
                <Stack.Screen name="(non-tabs)" options={{ headerShown: false }} />
            </Stack>
        </MockAuthProvider>
    );
};
