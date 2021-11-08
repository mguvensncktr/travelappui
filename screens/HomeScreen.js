import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { Entypo, Feather } from '@expo/vector-icons';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import { useNavigation } from '@react-navigation/native';
import activiesData from '../assets/data/activitiesData';
import learnMore from '../assets/data/learnMoreData';

const HomeScreen = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { item: item })}>
                <ImageBackground source={item.image} style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 }]} imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemInfo}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocation}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    const renderLearnMore = ({ item }) => {
        return (
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <ImageBackground source={item.image} style={{ width: 170, height: 180, justifyContent: 'flex-end' }} imageStyle={{ borderRadius: 20 }} >
                    <Text style={{ color: colors.white, fontSize: 18, marginHorizontal: 10, marginVertical: 20, fontFamily: 'Lato-Bold' }}>{item.title}</Text>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        <Feather name="menu" color={colors.black} size={32} />
                        <Image source={require('../assets/images/person.png')} style={styles.image} />
                    </View>
                </SafeAreaView>

                {/* Discover Section*/}
                <View style={styles.discoverContainer}>
                    <Text style={styles.discoverText}>Discover</Text>
                    <View style={styles.discoverCategories}>
                        {discoverCategoriesData.map((item, index) => (
                            <Text
                                style={[
                                    styles.categoriesText,
                                    {
                                        marginLeft: item.id === 'discover-categories-1' ? 0 : 30,
                                        color: index ? colors.gray : colors.orange
                                    }]}>
                                {item.text}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.discoverItems}>
                        <FlatList
                            data={discoverData}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    </View>
                    {/* Activies */}
                    <View style={styles.activitiesContainer}>
                        <Text style={styles.activitiesTitle}>Activities</Text>
                        <View style={styles.activities}>
                            {activiesData.map((item, index) => (
                                <View style={{ marginLeft: item.id === 'activities-1' ? 0 : 20 }}>
                                    <Image source={item.image} style={{ width: 30, height: 30, alignSelf: 'center' }} />
                                    <Text style={styles.activitiesLabel}>{item.title}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    {/* Learn More */}
                    <View style={styles.learnMoreContanier}>
                        <Text style={styles.learnMoreTitle}>Learn More</Text>
                        <View>
                            <FlatList
                                data={learnMore}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderLearnMore}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    headerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 52,
        width: 52,
        borderRadius: 10,
    },
    discoverContainer: {
        marginTop: 30,
    },
    discoverText: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,
    },
    discoverCategories: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
    },
    categoriesText: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
    },
    discoverItems: {
        paddingVertical: 20,
    },
    discoverItem: {
        height: 250,
        width: 170,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: colors.white,
        lineHeight: 22,
    },
    discoverItemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocation: {
        fontFamily: 'Lato-Bold',
        marginLeft: 5,
        fontSize: 14,
        lineHeight: 12,
        color: colors.white,
    },
    activitiesContainer: {
        marginTop: 10,
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    },
    activities: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    activitiesLabel: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.gray,
        marginTop: 5,
        alignSelf: 'center',
    },
    learnMoreContanier: {
        marginTop: 10,
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    }
});

export default HomeScreen;