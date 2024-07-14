import { SafeAreaView, Text, View } from 'react-native';
import { PasswordInput, Button, TopAppBar } from '@/components';
import { useRouter } from 'expo-router';

export default function NewPassword() {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 p-4 pt-12'>
      <TopAppBar title='New password' />
      <View className='flex-1 justify-between'>
        <View>
          <Text className='font-pmedium'>New password</Text>
          <PasswordInput placeholder='Enter your new password' />
          <Text className='font-pmedium mt-4'>Confirm new password</Text>
          <PasswordInput placeholder='Retype your new password' />
        </View>
        <View className='absolutebottom-0 w-full flex-row'>
          <Button variant='text' containerStyle='mr-4 flex-1' onPress={() => router.push('/')}>
            Cancel
          </Button>
          <Button variant='contained' containerStyle='flex-1'>
            Save
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
