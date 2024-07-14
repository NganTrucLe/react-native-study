import { useRef } from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { Button, TopAppBar } from '@/components';
import { useAuthContext } from './_context';

export default function VerifyOTP() {
  const inputs = useRef<TextInput[]>([]);
  const { forgotPassword } = useAuthContext();
  const setFocus = (index: number) => {
    if (index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };
  const setBackFocus = (index: number) => {
    if (index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView className='flex-1 p-4 pt-12'>
      <TopAppBar title='Verify OTP' />
      <View className='flex-1 justify-between'>
        <View>
          <Text className='text-neutral-400 font-pregular text-center text-sm mx-4 mb-4'>
            Please enter the verification code sent to {forgotPassword.email}
          </Text>
          <View className='flex-row justify-center'>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <TextInput
                  key={index}
                  className='mt-2 w-14 mr-2 h-14 bg-neutral-200 rounded-xl p-3 text-xl font-pmedium text-center'
                  keyboardType='number-pad'
                  autoFocus={index === 0}
                  onChangeText={(text) => {
                    if (text.length === 1) {
                      setFocus(index);
                    }
                  }}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace') {
                      setBackFocus(index);
                    }
                  }}
                  ref={(el) => (inputs.current[index] = el!)}
                />
              ))}
          </View>
        </View>
        <View>
          <Button variant='contained' href='/new-password'>
            Submit
          </Button>
          <View className='flex flex-row mt-2 justify-center'>
            <Text className='font-pregular '>Didn't receive the OTP? </Text>
            <Text className='font-pbold'>Resend</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
