import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins_400Regular', 
        color: '#fff',
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    }
    
})

export default styles;