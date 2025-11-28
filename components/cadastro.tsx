import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from '../styles/Cadastro1';

interface CadastroEtapa1Props {
  onNext?: (data: any) => void;
  onSkip?: () => void;
}

export default function CadastroEtapa1({ onNext, onSkip }: CadastroEtapa1Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');

  const handleNext = () => {
    if (onNext) {
      onNext({ nome, email, senha, idade, sexo });
    } else {
      console.log('Etapa 1:', { nome, email, senha, idade, sexo });
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      console.log('Pulou Etapa 1');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Botão Pular */}
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>FitSync</Text>
            <Text style={styles.stepIndicator}>Etapa 1 de 3</Text>
            <Text style={styles.subtitle}>Vamos conhecer você</Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Qual é o seu nome?</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome completo"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#999"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Qual é a sua idade?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 25"
                placeholderTextColor="#999"
                value={idade}
                onChangeText={setIdade}
                keyboardType="numeric"
                maxLength={3}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Qual é o seu sexo?</Text>
              <View style={styles.sexButtonContainer}>
                <TouchableOpacity 
                  style={[styles.sexButton, sexo === 'Masculino' && styles.sexButtonSelected]}
                  onPress={() => setSexo('Masculino')}
                >
                  <Text style={[styles.sexButtonText, sexo === 'Masculino' && styles.sexButtonTextSelected]}>
                    Masculino
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.sexButton, sexo === 'Feminino' && styles.sexButtonSelected]}
                  onPress={() => setSexo('Feminino')}
                >
                  <Text style={[styles.sexButtonText, sexo === 'Feminino' && styles.sexButtonTextSelected]}>
                    Feminino
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.sexButton, sexo === 'Outro' && styles.sexButtonSelected]}
                  onPress={() => setSexo('Outro')}
                >
                  <Text style={[styles.sexButtonText, sexo === 'Outro' && styles.sexButtonTextSelected]}>
                    Outro
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
