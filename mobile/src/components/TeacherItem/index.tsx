import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unvaforiteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsapp () {
        api.post('connections', {
            user_id: teacher.id
        })

        Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`)
    }

    async function handleToggleFavorite () {
        // get the teachers already favorited from device storage
        const favorites = await AsyncStorage.getItem('favorites');
            
        // start a new array
        let favoritesArray = [];

        // if there is any favorited teacher, parse the response
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            // find the item index
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })

            // remove it from array
            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);

        } else {
            // add the new teacher to the array
            favoritesArray.push(teacher)

            // set the TeacherItem as favorited
            setIsFavorited(true);
        }

        // save the updated array into device storage
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ uri: teacher.avatar }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}> {teacher.subject} </Text>
                </View>
            </View>

            <Text style={styles.bio}> {teacher.bio} </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost},00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[
                            styles.favoriteButton, 
                            isFavorited && styles.favorited
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        {isFavorited
                            ? <Image source={unvaforiteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }                        
                    </RectButton>

                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
            
        </View>
    );    
}

export default TeacherItem;