import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Image, ImageBackground} from 'react-native';
import colors from "../../../../_helpers/colors";

export default function ClientSlider() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            imageURL: require('../../../assets/cathy-pham-3jAN9InapQI-unsplash/cathy-pham-3jAN9InapQI-unsplash.png'),
            title: 'Catherine Williams'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2a',
            imageURL: require('../../../assets/john-fornander-TAZoUmDqzXk-unsplash/john-fornander-TAZoUmDqzXk-unsplash.png'),
            title: 'Mark Foster'
        },{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
            imageURL: require('../../../assets/sule-makaroglu-YFmvjO3TP_s-unsplash/sule-makaroglu-YFmvjO3TP_s-unsplash.png'),
            title: 'Serena Angel'
        }
    ];

    const renderItem = ({ item }) => (
        <ImageBackground source={item.imageURL} style={styles.image}>
            <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        textAlign: 'left',
        color: colors.white
    },
    image: {
        height: 150,
        width: 150,
        padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        height: 128,
        width: 128,
    }
});
