import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Switch, Dimensions} from 'react-native';
import {LineChart, PieChart} from "react-native-chart-kit";
import {data , labels} from '../constants/data'

const Graphs = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const checkOrientation = () => {
        const dim = Dimensions.get('screen');
        if (dim.height >= dim.width) {
            return portrait
        } else {
            return landscape
        }
    }

    const useScreenDimensions = () => {
        const [screenData, setScreenData] = useState(Dimensions.get('screen'));

        useEffect(() => {
            const onChange = (result) => {
                setScreenData(result.screen);
            };

            Dimensions.addEventListener('change', onChange);

            return () => Dimensions.removeEventListener('change', onChange);
        });

        return {
            ...screenData,
            isLandscape: screenData.width > screenData.height,
        };
    };

    const screenData = useScreenDimensions();

    if (isEnabled) {
        return (
            <View style={checkOrientation().container}>
                <Text>Show Chart</Text>
                <Switch
                    trackColor={{ false: "#ffcdb2", true: "#5b417c" }}
                    thumbColor={isEnabled ? "#ffcdb2" : "#5b417c"}
                    ios_backgroundColor="#5b417c"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={checkOrientation().toggle}
                />
                <PieChart
                    data={[
                        {
                            percent: 5,
                            color: '#755a57',
                        },
                        {
                            percent: 5,
                            color: '#92fff6',
                        },
                        {
                            percent: 10,
                            color: '#f07e5e',
                        },
                        {
                            percent: 80,
                            color: '#2e5e9d',
                        },
                    ]}
                    hasLegend={false}
                    width={
                        screenData.isLandscape ?
                        Dimensions.get('screen').width :
                        Dimensions.get('screen').width
                    }
                    height={
                        screenData.isLandscape ?
                        Dimensions.get("screen").height / 1.8:
                        Dimensions.get("screen").height / 3
                    }
                    chartConfig={{
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    style={{
                        alignItems: "center",
                        marginLeft: '50%',
                    }}
                    accessor="percent"
                    absolute
                />
            </View>
        )
    } else {
        return (
            <View style={checkOrientation().container}>
                <Text>Show Pie</Text>
                <Switch
                    trackColor={{ false: "#5b417c", true: "#a6e8cd" }}
                    thumbColor={isEnabled ? "#5b417c" : "#a6e8cd"}
                    ios_backgroundColor="#5b417c"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={checkOrientation().toggle}
                />
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                data: data
                            }
                        ]
                    }}
                    width={
                        screenData.isLandscape ?
                            Dimensions.get("screen").width :
                            Dimensions.get("screen").width * 1.3
                    }
                    height={
                        screenData.isLandscape ?
                            Dimensions.get("screen").height / 4.5 :
                            Dimensions.get("screen").height / 6
                    }
                    chartConfig={{
                        backgroundColor: "rgb(242, 242, 242)",
                        backgroundGradientFrom: "rgb(242, 242, 242)",
                        backgroundGradientTo: "rgb(242, 242, 242)",
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        propsForDots: {
                            r: "0",
                            strokeWidth: "0",
                            stroke: "#000",
                            barPercentage: '1'
                        }
                    }}
                    style={
                        screenData.isLandscape ?
                            {
                                paddingRight: Dimensions.get("screen").width / 4.5,
                                marginLeft: Dimensions.get("screen").width / 10,
                                marginTop: Dimensions.get("screen").height / 6.5,
                            } :
                        {
                            paddingRight: Dimensions.get("screen").width / 4,
                            marginLeft: Dimensions.get("screen").width / 9,
                            marginTop: Dimensions.get("screen").height / 11,
                        }
                    }
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    bezier
                />
            </View>
        )
    }
}

export default Graphs

const portrait = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        marginTop: '30%',
    },
    toggle: {
        flex: 0,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15%'
    },
});

const landscape = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        marginTop: '5%',
    },
    toggle: {
        flex: 0,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
});
