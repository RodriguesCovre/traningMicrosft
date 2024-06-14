# Documentação da Aplicação Node.js

## Visão Geral

Esta é uma aplicação básica em Node.js que demonstra a criação de um servidor HTTP usando o framework Express. Ele também inclui um middleware para autorização básica e um cliente HTTP simples para fazer requisições ao servidor.

## Arquivos

- **app.js**: Este arquivo contém a configuração do servidor Express, definição de rotas e o middleware para autorização.
- **client.js**: Este arquivo contém um cliente HTTP simples que faz uma requisição para o servidor.

## Detalhes da Aplicação

### app.js

- **Dependências**: O arquivo requer o módulo `express`.
- **Middleware de Autorização**: O middleware `isAuthorized` verifica se a solicitação contém o cabeçalho de autorização correto. Se não estiver presente ou não corresponder à senha esperada, ele retorna um status de 401 (Não Autorizado).
- **Rotas**:
  - Rota "/" responde com uma mensagem "Hello World!".
  - Rota "/users" requer autorização e retorna um JSON com informações de usuário.
  - Rota "/products" responde com um JSON com informações de produto.

### client.js

- **Dependências**: O arquivo requer o módulo `http`.
- **Opções da Requisição**: Define as opções para a requisição HTTP, incluindo o cabeçalho de autorização.
- **Requisição**: Faz uma requisição GET para a rota "/users" no servidor.
- **Tratamento de Resposta**:
  - Exibe o status da conexão.
  - Exibe os dados recebidos em chunks.
  - Indica quando a conexão foi fechada.

