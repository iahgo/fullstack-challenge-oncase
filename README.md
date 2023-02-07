# Projeto CRUD Fullstack




## Tecnologias 

- Node.Js
- React
- SQL
- Docker 
- Tests 

## Instalação
### Clone este repositório
  

```bash

git clone https://github.com/iahgo/fullstack-challenge-oncase.git

```

  

### Navegue até a pasta do projeto

  

```bash

cd fullstack-challenge-oncase

```

  

### Inicie o Docker Compose
É necessário possuir Docker instalado, se não possuir pode instalar através desse link: https://docs.docker.com/engine/install/
#### Atenção:
- Este comando irá iniciar todas as configurações necessárias e popular o banco de dados. 
- Certifique-se de não ter nenhum serviço rodando nas portas: 3000, 3001 e 3002. 
- 3000: frontend
- 3001: backend
- 3002: database
- É necessário subir o container 'app' completo, o container possui healthchecks para assegurar que se está operacional ou não.
  

```bash

npm run compose:up

```

  
- Este comando pode demorar um pouco para ser executado, pois nele está sendo instalado todas as dependências do projeto.

  

## Uso

  

A aplicação estará disponível em http://localhost:3000.


### Encerrar container docker
- Você pode derrubar o container docker através do comando dentro do diretório 'fullstack-challenge-oncase'
 ```bash

npm run compose:down

```
