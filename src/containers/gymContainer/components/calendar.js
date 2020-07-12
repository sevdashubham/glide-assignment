import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Image, ImageBackground} from 'react-native';
import colors from "../../../../_helpers/colors";
import commonStyles from "../../../../_helpers/commonStyles";

export default function Calendar() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-d53abb28ba',
            day: 'Today',
            time: '14:00',
            description: '1 hour training session with Satya Clarke'
        }
    ];

    const renderList = () => (
        DATA.map(item => {
            return (
                <View key={item.id} style={styles.listStyle}>
                    <View style={styles.leftPanel}>
                    <Text style={commonStyles.h2}>
                        {item.day}
                    </Text>
                         <Text style={commonStyles.h2}>
                        {item.time}
                    </Text>
                    </View>
                    <View style={styles.rightPanel}>
                        <Text style={commonStyles.h2}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            )
        })
    );

    return (
        <View style={styles.container}>
            {renderList()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftPanel: {
        flex: 1
    },
    rightPanel: {
        borderLeftColor: colors.secondary,
        borderLeftWidth: 1,
        paddingLeft: 15,
        flex: 3
    },
    listStyle: {
        flexDirection: 'row'
    }
});
