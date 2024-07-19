# App de Notas

Este é um aplicativo de notas desenvolvido para ajudar a organizar e gerenciar suas anotações de forma eficiente. O projeto é dividido em duas partes principais: frontend e backend. O frontend é responsável pela interface do usuário e a interação com o backend, que gerencia a lógica de negócios e o armazenamento de dados.

## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção rápida e desenvolvimento para projetos frontend.
- **Axios**: Cliente HTTP para fazer requisições para o backend.
- **CSS**: Para estilização global e específica.

### Backend
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework para criar aplicações web e APIs.
- **MySQL**: Banco de dados relacional para armazenamento de dados.
- **XAMPP**: Ambiente de desenvolvimento que inclui Apache e MySQL.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **frontend/**: Contém o código-fonte do frontend, incluindo componentes React, estilos e configuração do Vite.
- **backend/**: Contém o código-fonte do backend, incluindo configuração do Express, modelos de banco de dados e lógica de API.

## Configuração e Execução

### Backend

1. **Instale as dependências**:
   Navegue para o diretório `backend` e execute:
   ```bash
   cd backend
   npm install
   
2. **Configure o Banco de Dados:**
Certifique-se de que o MySQL está rodando e o banco de dados notasapp está configurado. Atualize as credenciais do banco de dados no arquivo de configuração do backend.

3. **Inicie o Servidor:**
Execute o comando para iniciar o servidor:
```bash
npm start


##
### frontend

1. **Instale as dependências:**
Navegue para o diretório frontend e execute:

2. **Configure o Axios:**
Certifique-se de que o baseURL no axios está configurado para apontar para o servidor do backend (http://localhost:3000/api).

3. **Inicie o Servidor de Desenvolvimento:**
Execute o comando para iniciar o servidor de desenvolvimento:
```bash
npm start

### Licença
Este projeto está licenciado sob a MIT License.
