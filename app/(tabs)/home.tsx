import React, { useRef } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images } from '@/constants';
import { Link } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet';

function Avatar() {
  return <Image source={Images.HomeCover} className='w-12 h-12 rounded-full ml-4' />;
}

const latestEvents = [{
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
const groups = [{
    id: 1,
    name: 'Group 1',
    events: 3,
    thumbnail: Images.HomeCover,
    }, {
    id: 2,
    name: 'Group 2',
    events: 2,
    thumbnail: Images.HomeCover,
    }, {
    id: 3,
    name: 'Group 3',
    events: 1,
    thumbnail: Images.HomeCover,
    }
];
export default function Home() {
    
  // ref for BottomSheet
  const bottomSheetRef = useRef(null);

  // variables for BottomSheet
  const snapPoints = ['25%', '50%', '90%'];
  return (
      <SafeAreaView>     
        <FlatList
            className='p-4'
            data={groups}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View className='mb-4 flex flex-row'>
                    <Image source={item.thumbnail} className='aspect-square w-20 rounded-lg' />
                    <View className='ml-4'>
                        <Text className='font-psemibold text-sm'>{item.name}</Text>
                        <Text className='font-pregular text-xs text-neutral-400'>{item.events} events together</Text>
                    </View>
                </View>
            )}
            ListHeaderComponent={() => (
                <>
                    <View className='flex flex-row items-center mb-4'>
                        <View className='flex-1 w-full'>
                            <Image source={Images.HomeCover} className='w-full h-full rounded-lg absolute' />
                            <View className='bg-gradient-to-t from-black to-black opacity-100 rounded-xl w-full h-full absolute' />
                            <View className='m-2'>
                                <Text className='text-lg text-white font-pbold'>Good morning!</Text>
                                <Text className='text-white font-pregular'>Duy Quân</Text>
                            </View>
                        </View>
                        <Avatar />
                    </View>   
                    <FlatList
                        data={latestEvents}
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
                                <Link href='/events' className='text-primary font-pregular text-xs'>
                                    View all
                                </Link>
                            </View>
                        )}
                    />
                    <View className='flex flex-row justify-between items-baseline mb-4'>
                        <Text className='text-lg font-psemibold'>Your groups</Text>
                        <Text className='text-primary font-pregular text-xs'>
                            New group
                        </Text>
                    </View>
                </>
            )}
        />
        {/* <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        >
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Awesome content goes here</Text>
        </View>
        </BottomSheet> */}
      </SafeAreaView>
  );
}
