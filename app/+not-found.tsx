import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className='flex-1 p-4 items-center justify-center'>
        <Text className='text-xl font-psemibold'>This screen doesn&apos;t exist</Text>
        <Link href='/' className='mt-4 py-2'>
          <Text className='text-blue-500 font-pmedium'>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
