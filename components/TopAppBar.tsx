import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from './Icon';

interface TopAppBarProps {
  title: string;
}

export function TopAppBar({ title }: TopAppBarProps) {
  const navigation = useNavigation();
  return (
    <View className='flex-row items-center pb-4 justify-between'>
      <View className='flex-1'>
        <TouchableOpacity className='mr-2' onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </TouchableOpacity>
      </View>
      <Text className='text-xl font-psemibold'>{title}</Text>
      <View className='flex-1' />
    </View>
  );
}
