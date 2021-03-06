import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ViewAllMedicalOfficesBtn from '../../components/medical-offices/buttons/ViewAllMedicalOffice';
import AddMedicalOfficeModal from '../../components/medical-offices/modal/AddMedicalOfficeModal';
import Title from '../../components/title/Title';

const MedicalOfficeScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllMedicalOfficesBtn navigation={navigation} />
                    <AddMedicalOfficeModal />
                </View>
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
        resizeMode: 'cover'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default MedicalOfficeScreen;