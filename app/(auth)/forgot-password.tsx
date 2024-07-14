import { SafeAreaView, Text, View } from 'react-native';
import { CustomTextInput, Button, TopAppBar } from '@/components';
import { useNavigation, useRouter } from 'expo-router';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useAuthContext } from './_context';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

function HelperText({ text }: { text: string | undefined }) {
  if (Boolean(text) === false) return null;
  return <Text className='text-red-500 font-pregular text-xs mt-1'>{text}</Text>;
}

export default function ForgotPassword() {
  const navigation = useNavigation();
  const { setForgotPassword } = useAuthContext();
  const router = useRouter();

  const handleSubmit = (values: { email: string }) => {
    setForgotPassword(values);
    router.push('/verify-otp');
  };

  return (
    <SafeAreaView className='flex-1 p-4 pt-12'>
      <TopAppBar title='Reset password' />
      <Formik initialValues={{ email: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View className='flex-1 justify-between'>
            <View>
              <Text className='text-neutral-400 font-pregular text-center text-sm mx-4 mb-4'>
                Please enter the email address associated with your account
              </Text>
              <Text className='font-pmedium'>Email</Text>
              <CustomTextInput
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder='Your email'
                endIcon='mail'
              />
              <HelperText text={touched.email ? errors.email : ''} />
            </View>
            <View className='absolutebottom-0 w-full flex-row'>
              <Button variant='text' containerStyle='mr-4 flex-1' onPress={() => navigation.goBack()}>
                Back
              </Button>
              <Button onPress={handleSubmit} variant='contained' containerStyle='flex-1'>
                Continue
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
