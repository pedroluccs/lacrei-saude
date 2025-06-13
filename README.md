
# Lacrei Saúde - Desafio Técnico

Projeto web desenvolvido com Next.js, TypeScript e Styled Components para a da Lacrei Saúde. O sistema é responsivo, acessível e conta com testes automatizados usando Jest e React Testing Library.

---

##  Rodando o projeto localmente

1. Clone o repositório:
   
   git clone https://github.com/pedroluccs/lacrei-saude.git
   cd lacrei-saude
   

2. Instale as dependências:
   
   npm install
   

3. Inicie o servidor de desenvolvimento:
   
   npm run dev
   

4. Acesse o projeto no navegador:
   
   http://localhost:3000
   

---

## 🛠 Build e Deploy

- Para criar o build de produção:
  
  npm run build
  

- Para rodar a aplicação em modo produção localmente:
  
  npm run start
  

- Deploy pode ser realizado facilmente em plataformas como **Vercel**, **Netlify** ou **Render**. Basta conectar o repositório e o processo de build será automático.

---

## ✅ Testes aplicados

- Testes unitários e de renderização dos componentes principais:
  - Botões (Button)
  - Cabeçalho (Header)

- Ferramentas usadas:
  - Jest
  - React Testing Library
  - jest-dom para extensões de matchers

Para rodar os testes:

npm test


---

## 🔄 Rollback simples

- Em plataformas de deploy (como Vercel):
  - Acesse o histórico de deploys.
  - Selecione uma versão anterior estável.
  - Refaça o deploy para essa versão.

- Em deploys manuais via Git:
  - Faça checkout para a tag ou commit desejado:
    
    git checkout <tag-ou-hash>
    
  - Rode o processo de build e deploy normalmente.

---

##  Escolhas técnicas e visuais

- **Next.js + TypeScript:** Fornecem estrutura moderna, desempenho e segurança via tipagem estática.
- **Styled Components:** Permitem modularidade no CSS, com possibilidade de theming e isolamento de estilos.
- **Responsividade:** Layouts adaptáveis para celulares, tablets e desktops usando media queries.
- **Acessibilidade:** Botões e componentes com textos claros e navegáveis, focando usabilidade para todos os usuários.
- **Jest + React Testing Library:** Garantem que a interface funcione conforme esperado e facilitam manutenção futura.
- **Desativação do Turbopack:** Para compatibilidade total com Styled Components e Babel, evitando perda de estilos no reload.
