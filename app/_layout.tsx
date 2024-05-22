import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'BeVietnamPro-Light': require('../assets/fonts/BeVietnamPro-Light.ttf'),
    'BeVietnamPro-ExtraLight': require('../assets/fonts/BeVietnamPro-ExtraLight.ttf'),
    'BeVietnamPro-Thin': require('../assets/fonts/BeVietnamPro-Thin.ttf'),
    'BeVietnamPro-Regular': require('../assets/fonts/BeVietnamPro-Regular.ttf'),
    'BeVietnamPro-Medium': require('../assets/fonts/BeVietnamPro-Medium.ttf'),
    'BeVietnamPro-SemiBold': require('../assets/fonts/BeVietnamPro-SemiBold.ttf'),
    'BeVietnamPro-Bold': require('../assets/fonts/BeVietnamPro-Bold.ttf'),
    'BeVietnamPro-ExtraBold': require('../assets/fonts/BeVietnamPro-ExtraBold.ttf'),
    'BeVietnamPro-Black': require('../assets/fonts/BeVietnamPro-Black.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </ThemeProvider>
  );
}
