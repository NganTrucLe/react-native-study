import { Text, View, Image } from 'react-native';
import { Button, CustomTextInput, PasswordInput } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import { Images } from '@/constants';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Platform, ToastAndroid, Alert } from 'react-native';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const showToast = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  } else {
    Alert.alert(message);
  }
};

export default function SignIn() {
  const router = useRouter();
  const handleSubmit = (values: { username: string; password: string }) => {
    showToast('Sign in successfully!');
    router.push('/home');
  };
  return (
    <SafeAreaView className='flex-1 items-left justify-between p-4'>
      <StatusBar style='auto' />
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit, values, handleChange, errors, isSubmitting, touched }) => {
          if (Object.keys(errors).length > 0 && isSubmitting) {
            console.log(errors);
            console.log(isSubmitting);
            showToast(Object.values(errors)[0] || '');
          }
          return (
            <>
              <View>
                <Text className='text-2xl font-pbold'>Welcome back!</Text>
                <Text className='mt-4 font-pregular'>Username</Text>
                <CustomTextInput
                  onChangeText={handleChange('username')}
                  value={values.username}
                  placeholder='Username'
                  error={Boolean(touched.username && errors.username)}
                  autoCapitalize='none'
                  endIcon='person'
                />
                <Text className='mt-4 font-pregular'>Password</Text>
                <PasswordInput
                  onChangeText={handleChange('password')}
                  value={values.password}
                  autoCapitalize='none'
                  placeholder='Password'
                />
                <Link href='/forgot-password' className='mt-2 font-pregular text-accent underline text-right'>
                  Forgot password?
                </Link>
              </View>
              <View>
                <Button containerStyle='mt-4' onPress={handleSubmit}>
                  Sign in
                </Button>
                <View className='flex flex-row my-4 items-center justify-center'>
                  <View className='bg-neutral-300 h-[1px] w-full mt-2 flex-1' />
                  <Text className='text-neutral-300 font-pregular mx-2'>Or</Text>
                  <View className='bg-neutral-300 h-[1px] w-full mt-2 flex-1' />
                </View>
                <Button variant='outlined'>
                  Sign in with <Image source={Images.GoogleLogoFull} className='h-5 w-20' resizeMode='contain' />
                </Button>
                <View className='flex flex-row mt-4 justify-center'>
                  <Text className='font-pregular '>Don't have an account? </Text>
                  <Link href='/sign-up' className='text-primary font-psemibold'>
                    Sign up
                  </Link>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}
