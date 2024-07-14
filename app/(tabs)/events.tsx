import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Image, Text } from 'react-native';
import { Images } from '@/constants';
import { CustomTextInput } from '@/components';

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
    }, {
    id: 4,
    title: 'Event 4',
    group: 'Group 4',
    startDate: '2022-01-04',
    endDate: '2022-01-04',
    thumbnail: Images.HomeCover,
    }, {
    id: 5,
    title: 'Event 5',
    group: 'Group 5',
    startDate: '2022-01-05',
    endDate: '2022-01-05',
    thumbnail: Images.HomeCover,
    }, {
    id: 6,
    title: 'Event 6',
    group: 'Group 6',
    startDate: '2022-01-06',
    endDate: '2022-01-06',
    thumbnail: Images.HomeCover,
    }, {
    id: 7,
    title: 'Event 7',
    group: 'Group 7',
    startDate: '2022-01-07',
    endDate: '2022-01-07',
    thumbnail: Images.HomeCover,
    }
];

export default function Events() {
    return (
        <SafeAreaView>
            <FlatList
                className='px-4'
                data={events}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View className='w-full h-[120px] mb-4 flex justify-end'>
                        <Image source={item.thumbnail} className='rounded-lg absolute w-full h-full' />
                        <View className='p-2'>
                            <Text className='text-white font-pregular text-xs'>{item.group}</Text>
                            <Text className='text-white font-psemibold text-base'>{item.title}</Text>
                            <Text className='text-white font-pregular text-xs'>{item.startDate} - {item.endDate}</Text>
                        </View>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <>
                        <View className='flex flex-row justify-between items-baseline mb-2'>
                            <Text className='text-lg font-psemibold'>Events</Text>
                            <Text  className='text-primary font-pregular text-xs'>
                                New event
                            </Text>
                        </View>
                        <CustomTextInput placeholder='Search events' endIcon='search' containerStyle='mb-4'/>
                    </>
                )}
            />
        </SafeAreaView>
    )
}