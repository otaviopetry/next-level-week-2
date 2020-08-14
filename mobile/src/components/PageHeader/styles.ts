import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 80,
        backgroundColor: '#8257e5',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Archivo_700Bold',
        lineHeight: 32,
        maxWidth: 180,
        marginVertical: 40
    }
})

export default styles;