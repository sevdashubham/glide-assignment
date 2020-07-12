import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Image, ImageBackground} from 'react-native';
import colors from "../../../../_helpers/colors";

export default function Header() {

    return (
        <View style={styles.container}>
           <Image style={styles.icon} source={require('../../../assets/header/search.png')}/>
            <Image style={styles.icon} source={require('../../../assets/header/add.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        height: 25,
        width: 25
    }
});
