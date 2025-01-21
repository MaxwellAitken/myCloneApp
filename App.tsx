import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>

            <Text style={styles.text}>Letterboxd</Text>

            <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#222', borderRadius: 5}}>
                <TouchableOpacity style={[styles.button, styles.active]}>
                    <Text style={styles.activeButtonText}>Films</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.buttonText}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.buttonText}>Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={styles.buttonText}>Journal</Text>
                </TouchableOpacity>
            </View>

        </View>


        {/* PRO */}
        <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#2f2f39', alignItems: 'center'}}>

            <View style={{backgroundColor: '#FF4500', paddingHorizontal: 5, paddingVertical: 3, marginHorizontal: 20, marginVertical: 12, borderRadius: 4}}>
                <Text style={{fontSize: 24, color: '#c9c9c9', fontWeight: 'bold'}}>PRO</Text>
            </View>
            <Text style={{fontSize: 12, color: '#a0a0a0', maxWidth: '75%'}}>Remove ads, add profile stats, activity and service filters, favorite streaming services and more by upgrading to Pro.</Text>
        </View>


        <View style={{display: 'flex', gap: 20, marginTop: 20, marginLeft: 16}}>

            {/* Popular  */}
            <View style={{display: 'flex', gap: 8}}>
                <Text style={{fontSize: 20, fontWeight: 'semibold', color: '#c9c9c9'}}>Popular this week</Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                    <Image source={require('./assets/Nosferatu.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/ARealPain.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/BabyGirl.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/TheSubstance.jpg')} style={styles.moviePoster}/>
                </View>
            </View>

            {/* New */}
            <View style={{display: 'flex', gap: 8}}>
                <Text style={{fontSize: 20, fontWeight: 'semibold', color: '#c9c9c9'}}>New from friends</Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                    <View style={{display: 'flex', gap: 4}}>
                        <Image source={require('./assets/Ran.jpg')} style={styles.moviePoster}/>
                        <Text style={{color: '#66666f', fontSize: 16}}>Wes</Text>
                    </View>
                    <View style={{display: 'flex', gap: 4}}>
                        <Image source={require('./assets/BackInAction.jpg')} style={styles.moviePoster}/>
                        <Text style={{color: '#66666f', fontSize: 16}}>joshrowley</Text>
                    </View>
                    <View style={{display: 'flex', gap: 4}}>
                        <Image source={require('./assets/WolfMan.jpg')} style={styles.moviePoster}/>
                        <Text style={{color: '#66666f', fontSize: 16}}>Jake</Text>
                    </View>
                    <View style={{display: 'flex', gap: 4}}>
                        <Image source={require('./assets/Cosmopolis.jpg')} style={styles.moviePoster}/>
                        <Text style={{color: '#66666f', fontSize: 16}}>Alex</Text>
                    </View>
                </View>
            </View>

            {/* Popular w friends */}
            <View style={{display: 'flex', gap: 8}}>
                <Text style={{fontSize: 20, fontWeight: 'semibold', color: '#c9c9c9'}}>Popular with friends</Text>

                <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
                    <Image source={require('./assets/TheBrutalist.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/Queer.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/WolfMan.jpg')} style={styles.moviePoster}/>
                    <Image source={require('./assets/HardTruths.jpg')} style={styles.moviePoster}/>
                </View>
            </View>

        </View>




        {/* Footer */}
        <View style={styles.footer}>
            <MaterialIcons name="amp-stories" size={30} color="#66afff" />
            <MaterialIcons name="search" size={30} color="#c9c9c9" />
            {/* <MaterialIcons name="add-circle-outline" size={30} color="#33cc3f" /> */}
            
                {/* Alert Button */}
                <Button title="Alert" color="#007AFF" onPress={() => alert('Alert Button Pressed')} />
            <MaterialIcons name="electric-bolt" size={30} color="#c9c9c9" />
            <MaterialIcons name="person" size={30} color="#c9c9c9" />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#09090c',
        paddingTop: 60,
        padding: 12,
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        gap: 8,
    },

    button: {
        backgroundColor: '#222',
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 5,
    },

    active: {
        backgroundColor: '#66666f',
    },

    buttonText: {
        fontSize: RFValue(16),
        color: '#999999',
    },

    activeButtonText: {
        fontSize: RFValue(16),
        color: '#c9c9c9',
    },


    container: {
        flex: 1,
        backgroundColor: '#19191f',
        color: '#fff',
    },

    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#c9c9c9',
    },

    moviePoster: {
        width: 100,
        height: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333',
    },


    footer: {
        backgroundColor: '#44444f',
        paddingBottom: 48,
        paddingTop: 8,
        paddingHorizontal: 16,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
