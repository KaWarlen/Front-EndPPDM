import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Treinos';

export default function Treinos({ navigation }: any) {
  const [treinos, setTreinos] = React.useState([
    {
      id: '1',
      nome: 'Treino de Peito',
      dia: 'Segunda-feira',
      duracao: '60 min',
      exercicios: 5,
      concluido: false,
    },
    {
      id: '2',
      nome: 'Treino de Costas',
      dia: 'Terça-feira',
      duracao: '60 min',
      exercicios: 6,
      concluido: false,
    },
    {
      id: '3',
      nome: 'Treino de Pernas',
      dia: 'Quarta-feira',
      duracao: '75 min',
      exercicios: 7,
      concluido: false,
    },
    {
      id: '4',
      nome: 'Treino de Braços',
      dia: 'Quinta-feira',
      duracao: '50 min',
      exercicios: 5,
      concluido: false,
    },
    {
      id: '5',
      nome: 'Treino de Cardio',
      dia: 'Sexta-feira',
      duracao: '40 min',
      exercicios: 1,
      concluido: false,
    },
  ]);

  const renderTreino = ({ item }: any) => (
    <TouchableOpacity style={styles.treinoCard} onPress={() => navigation.navigate('DetalheTreino', { treino: item })}>
      <View style={styles.treinoHeader}>
        <View style={styles.treinoHeaderRow}>
          <Text style={styles.treinoNome}>{item.nome}</Text>
          {item.concluido && (
            <Ionicons name="checkmark-circle" size={24} color="#00C853" />
          )}
        </View>
        <Text style={styles.treinoDia}>{item.dia}</Text>
      </View>
      <View style={styles.treinoFooter}>
        <Text style={styles.treinoInfo}>⏱ {item.duracao}</Text>
        <Text style={styles.treinoInfo}>💪 {item.exercicios} exercícios</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Ionicons name="barbell" size={36} color="#fff" />
          <Text style={styles.title}>Seus Treinos</Text>
        </View>
      </View>

      <FlatList
        data={treinos}
        renderItem={renderTreino}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />
    </View>
  );
}
