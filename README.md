# Tela de Cadastro de Usuário

Este projeto é a parte de frontend de uma aplicação de tela de cadastro de usuário desenvolvida com **React**, **TailwindCSS**, e **React Router DOM**, consumindo minha [Api_de cadastro de usuário](https://github.com/Arthur-Luiz19/Api-registro-de-usuario-com-JWT).

## Funcionalidades

1. **Tela de Cadastro**:
   - Permite o registro de novos usuários.

2. **Tela de Login**:
   - Usuários registrados podem fazer login.
   - O sistema valida as credenciais e armazena um token JWT gerado pelo backend.

3. **Tela de Listagem de Usuários**:
   - Após um login bem-sucedido, os usuários são redirecionados para uma tela que lista todos os usuários cadastrados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces.
- **TailwindCSS**: Framework de estilização para criar layouts rápidos e responsivos.
- **React Router DOM**: Gerenciamento de rotas na aplicação.
- **Axios**: Para requisições HTTP.
- **Vite**: Ferramenta de build para desenvolvimento rápido.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o servidor de desenvolvimento. \
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação no navegador.

### `npm run build`

Constrói o aplicativo para produção na pasta `dist`. A aplicação está pronta para ser implantada.

### `npm run lint`

Executa o linting no código-fonte usando o ESLint.

### `npm run preview`

Pré-visualiza a aplicação na versão de produção.

## Estrutura do Projeto
```plaintext
public/
│   ├── vite.svg
src/
│   ├── Pages/
│   │   ├── Cadastro/
│   │   │   ├── index.jsx
│   │   ├── Lista/
│   │   │   ├── index.jsx
│   │   ├── Login/
│   │       ├── index.jsx
│   ├── assets/
│   │   ├── react.svg
│   ├── services/
│   │   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Configuração do Ambiente

1. Certifique-se de ter o **Node.js** e o **npm** instalados.
2. Clone o repositório:

   ```bash
   git clone https://github.com/ArthurLuiz/tela-cadastro.git
   ```

3. Acesse o diretório do projeto:

   ```bash
   cd tela-cadastro
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorias ou correções.

## Objetivo do Projeto

Este projeto foi criado para desenvolver e consolidar habilidades no desenvolvimento front-end, incluindo integração com APIs, gerenciamento de rotas e armazenamento de tokens JWT no localStorage ou sessionStorage.

---

**Autor:** Arthur Luiz da Silva  
**GitHub:** [Arthur Luiz](https://github.com/Arthur-Luiz19)

