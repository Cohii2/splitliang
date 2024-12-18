import { Stack } from "expo-router";
import {MockAuthProvider} from "@/features/auth/MockAuthProvider";
import {MockDataProvider} from "@/features/data/MockDataProvider";

export default function RootLayout() {
    return (
        <MockAuthProvider>
            <MockDataProvider>
                <Stack>
                    {/* Tab screens */}
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    {/* Non-tab screens */}
                    <Stack.Screen name="(non-tabs)" options={{ headerShown: false }} />
                </Stack>
            </MockDataProvider>
        </MockAuthProvider>
    );
};
