import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({focused, icon, title} : any) => {
    if(focused){
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[100px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
            >  
                <Image source={icon} tintColor="#151312" className='size-5'/>
                <Text className="text-secondary text-base font-semibold ml-2">{title}</Text> 
            </ImageBackground>
        )
    }

    return (
        <View className="size-full justify-center items-center mt-4 roudned-full">
            <Image source={icon} tintColor="#A8B5DB" className='size-5'/>
        </View> 
    )
}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0f0D23',
            }
        }}
    >
        <Tabs.Screen 
            name="index" 
            options={{
                title: 'Home', 
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.home} 
                        title="Home" 
                    />
                )  
            }} 
        />
        <Tabs.Screen 
            name="Apps" 
            options={{
                title: 'Apps', 
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.apps} 
                        title="Apps" 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="History" 
            options={{
                title: 'History', 
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.save} 
                        title="History" 
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="Settings" 
            options={{
                title: 'Settings', 
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.person} 
                        title="Settings" 
                    />
                )           
            }}
        />

        <Tabs.Screen 
            name="AI_help" 
            options={{
                title: 'AI Help', 
                headerShown: false, 
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.search} 
                        title="AI Help" 
                    />
                )           
        }}
        />

    </Tabs>
  )
}

export default _Layout