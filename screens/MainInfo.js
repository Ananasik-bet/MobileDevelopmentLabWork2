import React from "react";
import {
    View, Text,
    StyleSheet
} from 'react-native'

const MainInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Дяченко Владислав</Text>
            <Text style={styles.txt}>Група ІО-83</Text>
            <Text style={styles.txt}>ЗК ІО-8309</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'column',
        alignItems:'center',
    },
    txt: {
        fontSize: 20
    },
});

export default MainInfo
