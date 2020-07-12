import * as React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import colors from '../../../_helpers/colors'
import GymContainer from "../gymContainer/gymContainer";
import SessionContainer from "../sessionContainer/sessionContainer";

const gym = require('../../assets/gym/gym.png');
const clients = require('../../assets/people/people-24px.png');
const sessions = require('../../assets/access-time/access-time.png');
const schedule = require('../../assets/calendar-today/calendar-today.png');

const initialLayout = {width: Dimensions.get('window').width};

export default function Dashboard() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'gym',
            icon: gym,
            color: colors.grey,
        },
        {
            key: 'clients',
            icon: clients,
            color: colors.primary,
        },
        {
            key: 'sessions',
            icon: sessions,
            color: colors.grey,
        }, {
            key: 'schedule',
            icon: schedule,
            color: colors.grey,
        },
    ]);

    const renderScene = ({route}) => {
        if (Math.abs(index - routes.indexOf(route)) > 1) {
            return <View/>;
        }
        switch (route.key) {
            case 'gym':
                return <View style={{flex: 1}}><GymContainer/></View>;
            case 'clients':
                return <View style={{flex: 1}}><GymContainer/></View>;
            case 'sessions':
                return <View style={{flex: 1}}><SessionContainer/></View>;
            case 'schedule':
                return <View style={{flex: 1}}><SessionContainer/></View>;
            default:
                return null;
        }
    };

    const renderIcon = ({route}) => {
        return (
            <View style={styles.tab}>
                <Image source={route.icon} size={24} style={styles.icon}/>
                <Text style={styles.tabTitle}>{route.key}</Text>
            </View>
        )
    };

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: colors.tabColor}}
            renderIcon={renderIcon}
            style={styles.tabBar}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            tabBarPosition="bottom"
            initialLayout={initialLayout}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabTitle: {
        paddingTop: 5,
        color: colors.whiteDark,
        textTransform: 'capitalize'
    },
    icon: {
        height: 32,
        width: 32
    },
    tabBar: {
        backgroundColor: colors.tabColor,
        height: 70
    }
});
