import { Icon } from "@/components";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: '#CCCCCC',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 56,
                    borderTopWidth: 0,
                    elevation: 5,
                }
            }}
        > 
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Icon name='home' color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Events',
                    tabBarIcon: ({color, focused}) => (
                        <Icon name='view-carousel' color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    title: 'New event',
                    tabBarIcon: ({color, focused}) => (
                        <Icon name='add-box' color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({color, focused}) => (
                        <Icon name='notifications' color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color, focused}) => (
                        <Icon name='account-circle' color={color} />
                    )
                }}
            />
        </Tabs>
    )
}