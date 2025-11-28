import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Perfil';

export default function Perfil({ route, navigation }: any) {
  const { userData } = route.params || { userData: {} };

  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Ionicons name="fitness" size={40} color="#fff" />
          <Text style={styles.title}>FitSync</Text>
        </View>
        <Text style={styles.subtitle}>Seu Perfil</Text>
      </View>

      <View style={styles.content}>
        {/* Informações Pessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>{userData.nome || 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{userData.email || 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Idade:</Text>
            <Text style={styles.infoValue}>{userData.idade ? `${userData.idade} anos` : 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Sexo:</Text>
            <Text style={styles.infoValue}>{userData.sexo || 'Não informado'}</Text>
          </View>
        </View>

        {/* Informações de Saúde */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações de Saúde</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Peso:</Text>
            <Text style={styles.infoValue}>{userData.peso ? `${userData.peso} kg` : 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Altura:</Text>
            <Text style={styles.infoValue}>{userData.altura ? `${userData.altura} cm` : 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Doença:</Text>
            <Text style={styles.infoValue}>
              {userData.doenca || 'Nenhuma'}
            </Text>
          </View>
        </View>

        {/* Preferências de Treino */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências de Treino</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Horário:</Text>
            <Text style={styles.infoValue}>{userData.horario || 'Não informado'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Foco:</Text>
            <Text style={styles.infoValue}>{userData.foco || 'Não informado'}</Text>
          </View>
        </View>

        {/* Botão de Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
