import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import RunEntryList from '../../components/run-tracker/list/RunEntryList';
import Title from '../../components/title/Title';

const AllRunsScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <RunEntryList />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default AllRunsScreen;