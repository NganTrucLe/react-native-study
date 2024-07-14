import { SafeAreaView, Text, View, Image } from 'react-native';
import { Button, CustomTextInput } from '@/components';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Images } from '@/constants';

export default function SignIn() {
  return (
    <SafeAreaView className={`flex-1 items-left justify-between p-4 pt-12`}>
      <StatusBar style='auto' />
      <View>
        <Text className='text-2xl font-pbold'>Hello new friend!</Text>
        <Text className='mt-4 font-pregular'>Email</Text>
        <CustomTextInput placeholder='Enter your email' endIcon='mail' />
        <Text className='mt-4 font-pregular'>Username</Text>
        <CustomTextInput placeholder='Username' endIcon='person' />
      </View>
      <View>
        <Button containerStyle='mt-4'>Sign up</Button>
        <View className='flex flex-row my-4 items-center justify-center'>
          <View className='bg-neutral-300 h-[1px] w-full mt-2 flex-1' />
          <Text className='text-neutral-300 font-pregular mx-2'>Or</Text>
          <View className='bg-neutral-300 h-[1px] w-full mt-2 flex-1 tex' />
        </View>
        <Button variant='outlined'>
          Sign up with <Image source={Images.GoogleLogoFull} className='h-5 w-20' resizeMode='contain' />
        </Button>
        <View className='flex flex-row mt-4 justify-center'>
          <Text className='font-pregular '>Already have an account? </Text>
          <Link href='/sign-in' className='text-primary font-psemibold'>
            Sign in here
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
