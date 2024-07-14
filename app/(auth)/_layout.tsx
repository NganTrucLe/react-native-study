import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { AuthContextProvider } from './_context';

export default function AuthLayout() {
  return (
    <AuthContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='sign-in' />
        <Stack.Screen name='sign-up' />
        <Stack.Screen name='forgot-password' />
        <Stack.Screen name='verify-otp' />
        <Stack.Screen name='new-password' />
      </Stack>
    </AuthContextProvider>
  );
}
