import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@/components';
import images from '@/constants/Images';
export default function App() {
  return (
    <SafeAreaView className='flex-1 items-left justify-end p-4'>
      <Image source={images.BackgroundGradient} className='absolute opacity-80' />
      <Text className='text-2xl font-pbold'>Date together, let memories last forever</Text>
      <Text className='text-neutral-400 font-pregular'>
        Lorem ipsum dolor sit amet consectetur. Et porttitor accumsan proin arcu condimentum ut quisque integer nunc.{' '}
      </Text>
      <Button href='/sign-in' containerStyle='mt-4'>
        Sign in
      </Button>
      <Button href='/sign-up' variant='outlined' containerStyle='mt-4'>
        Sign up
      </Button>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
