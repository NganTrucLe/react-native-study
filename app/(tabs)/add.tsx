import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Image, Text } from 'react-native';
import { Images } from '@/constants';
import { CustomTextInput, Icon } from '@/components';

const events = [{
    id: 1,
    title: 'Event 1',
    group: 'Group 1',
    startDate: '2022-01-01',
    endDate: '2022-01-01',
    thumbnail: Images.HomeCover,
    }, {
    id: 2,
    title: 'Event 2',
    group: 'Group 2',
    startDate: '2022-01-02',
    endDate: '2022-01-02',
    thumbnail: Images.HomeCover,
    }, {
    id: 3,
    title: 'Event 3',
    group: 'Group 3',
    startDate: '2022-01-03',
    endDate: '2022-01-03',
    thumbnail: Images.HomeCover,
    }
];

export default function Events() {
    return (
        <SafeAreaView className='px-4'>
            <View className='flex flex-row justify-between items-baseline'>
                <Text className='text-primary font-pregular text-xs'>
                    Cancel
                </Text>
                <Text className='text-lg font-psemibold'>New group</Text>
                <Text className='text-primary font-pregular text-xs'>
                    Save
                </Text>
            </View>                
            <Text className='mt-4 font-pregular'>Group's name</Text>
            <CustomTextInput placeholder='Name'/>
            <Text className='mt-4 font-pregular'>Thumbnail</Text>
            <View className='w-full items-center p-4 mt-4 border border-neutral-300 rounded-lg'>
                <Icon name='upload-file' className='text-blue-500 mb-2'/>
                <Text className='font-pregular mb-2'>Click to upload</Text>
                <Text className='font-pregular text-neutral-400'>SVG, PNG, JPG (1400x700px)</Text>
            </View>
        </SafeAreaView>
    )
}