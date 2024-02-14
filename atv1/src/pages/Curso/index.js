import { SafeAreaView, Text, StyleSheet, View, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Curso() {

    const navigation = useNavigation();

    function DetalhesAQ() {

        navigation.navigate('Detalhes', {
            nomeCurso: 'ASSISTENTE DE CONTROLE DA QUALIDADE',
            descricao: 'O curso de Qualificação Profissional Assistente de Controle da Qualidade tem por objetivo o desenvolvimento de competências que permitam a colaboração na análise e solução de problemas de processo e qualidade, aplicando as Ferramentas da Qualidade, visando melhoria, produtividade e satisfação dos clientes, seguindo procedimentos de trabalho e normas da qualidade, saúde, segurança e meio ambiente',
            subCarga: 'Carga Horaria:',
            carga: '160 horas',
            subProgramacao: 'Programação:',
            programacao: `               • Ferramentas da Qualidade;
                •Custos da Qualidade;
                •Identificação do Problema;
                •Método de Análise e Solução de Problema (MASP);
                •Programa 5S;
                •Normas técnicas.`,
            subRequisitos: 'Requisitos:',
            requisitos: `           O aluno deverá, no início do curso, ter no mínimo 16 anos de idade;
            O aluno deverá estar cursando o Nível Médio a partir da 2 ª série/ano.`,
        });

    }

    function DetalhesRH() {

        navigation.navigate('Detalhes', {
            nomeCurso: 'ASSISTENTE DE RECURSOS HUMANOS',
            descricao: 'O curso de Qualificação Profissional Assistente de Recursos Humanos tem por objetivo o desenvolvimento de competências para auxílio das rotinas do departamento de recursos humanos, nas atividades de recrutamento e seleção, no departamento pessoal, no treinamento e desenvolvimento, nos cargos e salários e na higiene, saúde e segurança no trabalho de acordo com a legislação e procedimentos internos da empresa.',
            subCarga: 'Carga Horaria:',
            carga: '160 horas',
            subProgramacao: 'Programação:',
            programacao: `               • Capacidades Técnicas:

                •Identificar tipos de empresa considerando as relações de trabalho
                •Interpretar organograma organizacional
                •Aplicar o processo de comunicação verbal
                •Aplicar o processo de comunicação não verbal
                •Interpretar as políticas de cargos e salários da empresa
                •Auxiliar nos processos de recrutamento e seleção
                •Executar processos de admissão no departamento pessoal
                •Executar processos de rescisão no departamento pessoal
                •Executar cálculos de folha de pagamento
                •Auxiliar nos processos de treinamento
                •Auxiliar nos processos de desenvolvimento profissional
                •Operacionalizar rotinas dos Recursos Humanos utilizando meios eletrônicos
                •Registrar documentos referentes à higiene, saúde e segurança no trabalho
                
                •Capacidades sociais, organizativas e metodológicas
                
                •Trabalhar em equipe
                •Demonstrar visão sistêmica
                •Demonstrar capacidade de resolução de conflitos
                •Demonstrar organização`,
            subRequisitos: 'Requisitos:',
            requisitos: `           O aluno deverá, no início do curso, ter no mínimo 16 anos de idade;
            O aluno deverá ter concluído o Nível Fundamental.`,
        });

    }

    function DetalhesFinan() {

        navigation.navigate('Detalhes', {
            nomeCurso: 'ASSISTENTE FINANCEIRO',
            descricao: 'O Curso de Qualificação Profissional Assistente Financeiro tem por objetivo desenvolver competências para executar trabalhos pertinentes à rotina do setor financeiro das organizações, realizando a conciliação bancária, contas a pagar e receber, organização e classificação de documentos, apuração de impostos, emissão de guias de recolhimento, conferência de notas fiscais e recibos, de acordo com a legislação, procedimentos internos, normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.',
            subCarga: 'Carga Horaria:',
            carga: '160 horas',
            subProgramacao: 'Programação:',
            programacao: `               • Identificar os tipos de empresas;
                • Identificar subsistemas da área financeira;
                • Realizar cálculos financeiros inclusive em meio eletrônico;
                • Calcular impostos de acordo com a legislação;
                • Realizar fluxo de caixa inclusive em meio eletrônico;
                • Realizar conciliação bancária;
                • Organizar fluxo de documentos financeiros;
                • Conferir documentos fiscais;
                • Elaborar relatórios financeiros inclusive em meio eletrônico;
                • Demonstrar raciocínio lógico;
                • Demonstrar organização;
                • Demonstrar capacidade de comunicação oral e escrita;
                • Manipular informações com critério de segurança e confidencialidade.`,
            subRequisitos: 'Requisitos:',
            requisitos: `           O aluno deverá, no início do curso, ter no mínimo 16 anos de idade;
            O aluno deverá ter concluído o Nível Fundamental.`,
        });

    }

    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.box}>

                        <Text style={styles.titulo}>ASSISTENTE DE CONTROLE DA QUALIDADE</Text>

                        <Text style={styles.textLink} onPress={DetalhesAQ}> Saiba mais! </Text>

                    </View>

                    <View style={styles.box}>

                        <Text style={styles.titulo}>ASSISTENTE DE RECURSOS HUMANOS</Text>

                        <Text style={styles.textLink} onPress={DetalhesRH}> Saiba mais! </Text>

                    </View>

                    <View style={styles.box}>

                        <Text style={styles.titulo}>ASSISTENTE FINANCEIRO</Text>

                        <Text style={styles.textLink} onPress={DetalhesFinan}> Saiba mais! </Text>


                    </View>

                </View>

            </ScrollView>

        </SafeAreaView >

    )

}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 0 : 40,
    },
    container: {
        backgroundColor: '#c1c1c1',
        alignItems: 'center',
        justifyContent: 'start',
        height: 790
    },
    box: {
        width: 400,
        height: 'auto',
        padding: 30,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 8,
    },
    desc: {
        textAlign: 'justify',
        paddingTop: 7,
    },
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    des: {
        fontWeight: 'bold',
        paddingTop: 4,
    },
    textLink: {
        color: 'red',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        padding: 20
    }
});
