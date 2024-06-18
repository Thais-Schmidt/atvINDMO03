import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Detalhes() {

    const route = useRoute();

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>

                <View style={styles.container}>

                    <Text style={styles.titulo}> {route.params?.nomeCurso}</Text>

                    <Text style={styles.descricao}> {route.params?.descricao}</Text>

                    <View style={styles.infos}>

                        <Text style={styles.subtitulos}> {route.params?.subCarga}</Text>

                        <Text style={styles.carga}> {route.params?.carga}</Text>


                        <Text style={styles.subtitulos}> {route.params?.subProgramacao}</Text>

                        <Text style={styles.programacao}> {route.params?.programacao}</Text>


                        <Text style={styles.subtitulos}> {route.params?.subRequisitos}</Text>

                        <Text style={styles.requisitos}> {route.params?.requisitos}</Text>

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        width: '95%',
        height: 800,
        paddingLeft: 15
    },
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    descricao: {
        textAlign: 'justify',
        fontSize: 15
    },
    infos: {
        width: '92%',
    },
    subtitulos: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 5
    }



});
