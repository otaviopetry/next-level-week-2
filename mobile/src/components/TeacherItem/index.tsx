import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unvaforiteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem () {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ uri: 'https://github.com/otaviopetry.png' }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Otavio Petry</Text>
                    <Text style={styles.subject}>Finalizações malemolentes</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Um fino exemplar da malemolência arroiomeense
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 80,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
            
        </View>
    );    
}

export default TeacherItem;