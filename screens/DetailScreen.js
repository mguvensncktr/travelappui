import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors'
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('window').height;


const DetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    return (
        <View style={styles.container}>
            {/* Image Info */}
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImageStyle}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationContainer}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationTitle}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            {/* Desc Container */}
            <View style={styles.descContainer}>
                {/* Floating Icon */}
                <View style={styles.favIconContainer}>
                    <Entypo name="heart" size={36} color={colors.orange} />
                </View>
                {/* Desc */}
                <View style={styles.descTextContainer}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.descText}>{item.description}</Text>
                </View>
                <View style={styles.itemInfoContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemInfoTitle}>PRICE</Text>
                        <Text style={styles.itemInfoNumber}>${item.price}<Text style={styles.slashInfo}>/person</Text></Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.itemInfoTitle}>RATING</Text>
                        <Text style={styles.itemInfoNumber}>${item.rating}<Text style={styles.slashInfo}>/5</Text></Text>
                    </View>
                    <View style={styles.durationContainer}>
                        <Text style={styles.itemInfoTitle}>DURATION</Text>
                        <Text style={styles.itemInfoNumber}>${item.duration}<Text style={styles.slashInfo}> hours</Text></Text>
                    </View>
                </View>
                {/* Button */}
                <TouchableOpacity onPress={() => console.log('Book Now pressed')} style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImageStyle: {
        height: height * 0.5,
        justifyContent: 'space-between',
    },
    descContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -20,
        borderRadius: 25,
    },
    backButton: {
        marginLeft: 10,
        marginTop: 30,
    },
    infoContainer: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',

    },
    locationTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginLeft: 10,
    },
    itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.white,
    },
    favIconContainer: {
        position: 'absolute',
        top: -30,
        right: 30,
        borderRadius: 64,
        backgroundColor: '#FFFFFF',
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    descTextContainer: {
        marginHorizontal: 20,
    },
    descTitle: {
        marginTop: 30,
        fontFamily: 'Lato-Bold',
        color: colors.black,
        fontSize: 24,
    },
    descText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.gray,
    },
    itemInfoContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemInfoTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.gray,
    },
    priceContainer: {
        alignItems: 'center',
    },
    ratingContainer: {
        alignItems: 'center',
    },
    durationContainer: {
        alignItems: 'center',
    },
    itemInfoNumber: {
        marginTop: 5,
        color: colors.orange,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
    },
    slashInfo: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.gray
    },
    button: {
        backgroundColor: colors.orange,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 30,
        paddingVertical: 15,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    }
})

export default DetailScreen
