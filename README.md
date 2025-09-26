# 🎮 BrincaLetra

**Um jogo de adivinhação de palavras interativo desenvolvido em React!**

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📖 Sobre o Projeto

BrincaLetra é um jogo de palavras inspirado no clássico "Jogo da Forca", mas com uma abordagem moderna. O objetivo é descobrir palavras secretas de diferentes categorias, seja adivinhando letra por letra ou tentando a palavra completa.

### ✨ Funcionalidades Principais

- 🎯 **Múltiplas Categorias**: Palavras de diferentes temas para variar a diversão
- ⏱️ **Sistema de Timer**: 60 segundos por palavra com aviso visual nos últimos 10 segundos
- 🏆 **Sistema de Pontuação Dinâmico**: 
  - +10 pontos por letra correta
  - +125 pontos por palavra completa
  - -30 pontos por tentativa de palavra incorreta
  - -50 pontos por pular palavra
- ⏭️ **Opção de Pular Palavra**: Com penalidade
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- 🎨 **Interface Moderna**: Design limpo e intuitivo
- 🔄 **Troca Automática**: Sistema inteligente que detecta quando a palavra foi descoberta

## 🎮 Como Jogar

### Objetivo
Descubra a palavra secreta antes que o tempo acabe ou suas tentativas se esgotem!

### Regras do Jogo

1. **Leia a Categoria**: A dica é o tema das palavras
2. **Adivinhe as Letras**: Digite letras para descobrir a palavra
3. **Ou Tente a Palavra Completa**: Se souber a resposta, digite a palavra inteira
4. **Gerencie seu Tempo**: Você tem 60 segundos por palavra
5. **Use a Opção de Pular**: Se estiver em dificuldades (com penalidade)

### Sistema de Pontuação

| Ação | Pontos |
|------|--------|
| ✅ Letra correta | +10 |
| ✅ Palavra completa correta | +125 |
| ❌ Tentativa de palavra incorreta | -30 |
| ⏭️ Pular palavra | -50 |
| ⏰ Tempo esgotado | Game Over |

### Condições de Game Over

- ❌ Errar 6 tentativas de letras
- ⏰ Tempo de 60 segundos esgotar

## 🚀 Tecnologias Utilizadas

- **React 19.1.1**: Framework principal para construção da interface
- **JavaScript ES6+**: Lógica do jogo e interatividade
- **CSS3**: Estilização moderna com gradientes, animações e responsividade
- **React Hooks**: useState, useEffect, useCallback para gerenciamento de estado
- **Create React App**: Configuração e build do projeto

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/deboradiasdev/brincaletra.git
   cd brincaletra
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

- `npm start`: Executa o app em modo de desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Cria build de produção
- `npm run eject`: Ejeta as configurações (irreversível)

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── Game.js         # Componente principal do jogo
│   ├── Game.css        # Estilos do jogo
│   ├── StartScreen.js  # Tela inicial
│   ├── StartScreen.css # Estilos da tela inicial
│   ├── GameOver.js     # Tela de game over
│   └── GameOver.css    # Estilos do game over
├── data/
│   └── words.js        # Base de dados das palavras
├── App.js              # Componente raiz
├── App.css             # Estilos globais
└── index.js            # Ponto de entrada
```

## 🎨 Características Técnicas

### Funcionalidades Implementadas

- **Timer Inteligente**: Sistema de cronômetro que para automaticamente quando necessário
- **Normalização de Strings**: Tratamento de acentos e caracteres especiais
- **Detecção Automática de Vitória**: Reconhece quando todas as letras foram descobertas
- **Interface Responsiva**: Adaptação automática para diferentes tamanhos de tela
- **Feedback Visual**: Animações e cores para melhor experiência do usuário
- **Gerenciamento de Estado**: Uso eficiente dos React Hooks

### Melhorias Futuras Possíveis

- 🔊 Efeitos sonoros
- 🏆 Sistema de ranking/recordes
- 🌐 Multiplayer online
- 📊 Estatísticas detalhadas
- 🎨 Temas personalizáveis
- 📱 App mobile nativo

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ usando React e muito café ☕

---

**Divirta-se jogando BrincaLetra! 🎉**
