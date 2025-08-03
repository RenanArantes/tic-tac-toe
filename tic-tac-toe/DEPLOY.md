# 🚀 Guia de Deploy no GitHub Pages

## Configuração Inicial

O projeto já está configurado para funcionar com GitHub Pages. As seguintes configurações foram feitas:

### 1. Vite Config (`vite.config.ts`)

```typescript
base: '/tic-tac-toe/',
```

### 2. GitHub Actions (`.github/workflows/deploy.yml`)

Deploy automático configurado para executar a cada push na branch `main`.

### 3. Scripts no `package.json`

- `npm run build` - Faz o build para produção
- `npm run deploy` - Deploy manual no GitHub Pages

## 📋 Passos para Deploy

### Opção 1: Deploy Automático (Recomendado)

1. **Faça commit e push das mudanças:**

   ```bash
   git add .
   git commit -m "Configuração para GitHub Pages"
   git push origin main
   ```

2. **Configure o GitHub Pages:**
   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione "Deploy from a branch"
   - Selecione a branch `gh-pages` e pasta `/ (root)`
   - Clique em "Save"

3. **Aguarde o deploy:**
   - O GitHub Actions irá automaticamente fazer o build e deploy
   - Você pode acompanhar o progresso em Actions > Deploy to GitHub Pages

4. **Acesse seu site:**
   - URL: `https://[seu-usuario].github.io/tic-tac-toe/`

### Opção 2: Deploy Manual

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Faça o build:**

   ```bash
   npm run build
   ```

3. **Deploy manual:**
   ```bash
   npm run deploy
   ```

## 🔧 Solução de Problemas

### Se o site não carregar:

1. Verifique se a branch `gh-pages` foi criada
2. Confirme se o GitHub Pages está configurado para usar a branch `gh-pages`
3. Aguarde alguns minutos para o deploy ser propagado

### Se houver erro 404:

1. Verifique se o arquivo `public/.nojekyll` existe
2. Confirme se o `base` no `vite.config.ts` está correto
3. Verifique se os arquivos `404.html` e o script de redirecionamento estão presentes

### Se o roteamento não funcionar:

1. Verifique se o script de redirecionamento está no `index.html`
2. Confirme se o arquivo `404.html` está na pasta `public`

## 📝 Notas Importantes

- O projeto está configurado para funcionar em `https://[usuario].github.io/tic-tac-toe/`
- Se você mudar o nome do repositório, atualize o `base` no `vite.config.ts`
- O deploy automático acontece a cada push na branch `main`
- O GitHub Actions usa Node.js 18 e npm para o build
