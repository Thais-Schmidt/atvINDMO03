import { Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Detalhes() {

    const route = useRoute();

    return (

        <SafeAreaView style={styles.androidSafeArea}>
            <ScrollView>
                <Text> {route.params?.nomeCurso}</Text>
                <Text> {route.params?.descricao}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#dddede',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 27,
        paddingTop: 200
    },
});
