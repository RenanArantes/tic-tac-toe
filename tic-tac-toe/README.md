# Tic Tac Toe Game

Um jogo da velha (Tic Tac Toe) construído com React, TypeScript e Tailwind CSS.

## 🎮 Como Jogar

- Clique em qualquer quadrado vazio para fazer sua jogada
- O primeiro jogador usa "X" e o segundo usa "O"
- O primeiro a alinhar 3 símbolos iguais (horizontal, vertical ou diagonal) vence
- Se todos os quadrados forem preenchidos sem um vencedor, é empate

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para ser deployado automaticamente no GitHub Pages.

### Deploy Automático (Recomendado)

1. Faça push das suas mudanças para a branch `main`
2. O GitHub Actions irá automaticamente fazer o build e deploy
3. Acesse: `https://[seu-usuario].github.io/tic-tac-toe/`

### Deploy Manual

```bash
# Instalar dependências
npm install

# Fazer build
npm run build

# Deploy manual (se você tiver gh-pages instalado)
npm run deploy
```

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run deploy` - Faz deploy manual no GitHub Pages