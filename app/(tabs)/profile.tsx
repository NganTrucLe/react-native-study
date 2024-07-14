import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Image, Text } from 'react-native';
import { Images } from '@/constants';

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
        <SafeAreaView>
            <FlatList
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
                    <View className='flex flex-row justify-between items-baseline mb-4'>
                        <Text className='text-lg font-psemibold'>Latest events</Text>
                        <Text  className='text-primary font-pregular text-xs'>
                            New event
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}