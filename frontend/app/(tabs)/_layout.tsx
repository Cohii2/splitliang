import {Tabs} from "expo-router";
import {Icon} from "react-native-paper";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Icon source="wallet-outline" size={30} color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => <Icon source="account-box-outline" size={30} color={color} />,
                }}
            />
        </Tabs>
    );
};
