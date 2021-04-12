import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainInfo from "./MainInfo";
import Graphs from "./Graphs";

const MyTheme = {
    dark: false,
    colors: {
        primary: '#5b417c',
        background: 'rgb(242, 242, 242)',
        card: '#5b417c',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="Creator"
                    component={MainInfo}
                    options={{
                        tabBarLabel: 'Creator',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'angellist'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Graphs"
                    component={Graphs}
                    options={{
                        tabBarLabel: 'Graphs',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'area-chart'}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
