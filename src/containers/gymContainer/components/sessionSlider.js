import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import colors from "../../../../_helpers/colors";

export default function SessionSlider() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baaa',
            imageURL: require('../../../assets/valery-sysoev-LDAirERNzew-unsplash/valery-sysoev-LDAirERNzew-unsplash.png'),
            title: 'Back and Abs',
            count: 13,
            difficulty: 'Advanced'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baaa2',
            imageURL: require('../../../assets/damir-spanic-22L7do1cOho-unsplash/damir-spanic-22L7do1cOho-unsplash.png'),
            title: 'Biceps',
            count: 28,
            difficulty: 'Beginner'
        }
    ];

    const renderItem = ({ item }) => (
            <ImageBackground source={item.imageURL} style={styles.image}>
                <View style={styles.item}>
            <View style={styles.difficultyContainer}>
                <Text style={styles.difficultyText}>{item.difficulty}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.countText}>{`${item.count} people this week`}</Text>
                </View>
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
        paddingTop: 20
    },
    item: {height: 265, width: 305},
    image: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 9,
        justifyContent: "center"
    },
    difficultyContainer: {
        position: 'absolute',
        top: 14,
        left: 15,
        zIndex: 1,
        borderRadius: 10,
        backgroundColor: colors.alternate
    },
  difficultyText: {
        padding: 5,
       color: colors.white
  },
    title: {
        position: 'absolute',
        bottom: 41,
        left: 27,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'left',
        fontWeight: '600',
        color: colors.white
    },
    countText: {
        position: 'absolute',
        bottom: 20,
        left: 27,
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'left',
        color: colors.white
    }
});
