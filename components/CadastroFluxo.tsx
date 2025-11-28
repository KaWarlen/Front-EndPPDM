import React, { useState } from 'react';
import CadastroEtapa1 from './cadastro';
import CadastroEtapa2 from './cadastro2';
import CadastroEtapa3 from './cadastro3';

export default function CadastroFluxo({ navigation }: any) {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [dadosCadastro, setDadosCadastro] = useState({});

  const handleNextEtapa1 = (data: any) => {
    setDadosCadastro({ ...dadosCadastro, ...data });
    setEtapaAtual(2);
  };

  const handleNextEtapa2 = (data: any) => {
    setDadosCadastro({ ...dadosCadastro, ...data });
    setEtapaAtual(3);
  };

  const handleFinish = (data: any) => {
    const dadosCompletos = { ...dadosCadastro, ...data };
    console.log('Dados do Cadastro Completo:', dadosCompletos);
    navigation.navigate('TelaAluno', { userData: dadosCompletos });
  };

  const handleSkip = () => {
    console.log('Usuário pulou o cadastro');
    navigation.navigate('TelaAluno', { userData: { nome: 'Usuário' } });
  };

  return (
    <>
      {etapaAtual === 1 && (
        <CadastroEtapa1 
          onNext={handleNextEtapa1} 
          onSkip={handleSkip}
        />
      )}
      {etapaAtual === 2 && (
        <CadastroEtapa2 
          onNext={handleNextEtapa2} 
          onSkip={handleSkip}
          onBack={() => setEtapaAtual(1)}
        />
      )}
      {etapaAtual === 3 && (
        <CadastroEtapa3 
          onFinish={handleFinish} 
          onSkip={handleSkip}
          onBack={() => setEtapaAtual(2)}
        />
      )}
    </>
  );
}
