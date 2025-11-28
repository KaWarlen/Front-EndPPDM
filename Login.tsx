import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Login';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navega para TelaAluno passando os dados do login
    navigation.navigate('TelaAluno', { 
      userData: { email, nome: 'Usuário' } 
    });
  };

  const handleForgotPassword = () => {
    console.log('Esqueci minha senha');
  };

  const handleSignUp = () => {
    navigation.navigate('Cadastro');
  };

  const handleTrainerAccess = () => {
    // Navega para área do treinador
    navigation.navigate('AreaTreinador');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="fitness" size={60} color="#007AFF" />
            <Text style={styles.title}>FitSync</Text>
          </View>
          <Text style={styles.subtitle}>Faça login para continuar</Text>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="••••••••"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Ionicons name="person" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.loginButtonText}>Entrar como Cliente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trainerButton} onPress={handleTrainerAccess}>
            <Ionicons name="barbell" size={20} color="#007AFF" style={styles.buttonIcon} />
            <Text style={styles.trainerButtonText}>Área do Treinador</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
