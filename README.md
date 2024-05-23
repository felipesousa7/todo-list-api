# API de Lista de Tarefas
Esta é a API para a aplicação de Lista de Tarefas, desenvolvida com Node.js, Express e TypeScript.

### Tecnologias Utilizadas
* Node.js
* Express
* TypeScript
* MySql
* JWT para autenticação

### Funcionalidades
* Autenticação e autorização de usuários
* CRUD de tarefas (Criar, Ler, Atualizar, Deletar)
* Interação com o frontend para comunicação de dados

### Como Executar
* Certifique-se de ter o Node.js e o MySql instalados.
* Clone este repositório.
* Configure o arquivo `.env` com as credenciais do banco de dados.
* Abra o terminal na pasta do projeto.
* Execute `npm install` para instalar as dependências.
* Execute `npm run dev` para iniciar o servidor.
* Clone e execute o projeto [Frontend](https://github.com/seu-usuario/todo-list-front)

### Estrutura do Projeto
* **controllers**: Controladores REST para endpoints da API.
* **middleware**: Middleware para autenticação e outras funções intermediárias.
* **routes**: Definições das rotas da API.
* **models**: Modelos representando entidades do banco de dados.
* **swagger.ts**: Configuração do Swagger para documentação da API.
* **app.ts**: Configuração principal da aplicação.

### Endpoints Disponíveis

#### Autenticação
* **POST /register**: Registra novo usuário e retorna token JWT.
* **POST /login**: Autentica usuário e retorna token JWT.

#### Tarefas
* **POST /tasks**: Cria nova tarefa.
* **GET /tasks**: Lista todas as tarefas.
* **PUT /tasks/{id}**: Atualiza tarefa existente.
* **DELETE /tasks/{id}**: Remove tarefa existente.

### Documentação da API
A documentação da API é gerada automaticamente pelo Swagger. Para acessá-la, inicie o servidor e abra o seguinte endereço no seu navegador:(http://localhost:3000/api-docs)

### Exemplo de Arquivo .env
```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=seu_banco
JWT_SECRET=sua_chave_secreta

