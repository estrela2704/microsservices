## Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white)
![Ícone do TypeORM](<svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1em" viewBox="0 0 256 233"><path fill="#8e8f8f" d="M138.63 32.232a5.665 5.665 0 0 1 5.663 5.521l.002.144v64.845a5.665 5.665 0 0 1-5.521 5.664l-.144.002H85.754a5.665 5.665 0 0 1-5.664-5.522l-.001-.144V37.897a5.667 5.667 0 0 1 5.521-5.664l.144-.001zm0 2.52H85.754a3.15 3.15 0 0 0-3.147 3.032l-.003.113v64.845a3.155 3.155 0 0 0 3.037 3.148l.113.002h52.876a3.155 3.155 0 0 0 3.147-3.037l.002-.113V37.897a3.15 3.15 0 0 0-3.15-3.145M93.306 92.67v3.774h-3.778V92.67zm42.18 0v3.774H95.197V92.67zm-42.18-16.367v3.774h-3.778v-3.774zm42.18 0v3.774H95.197v-3.774zm-42.18-15.738v3.773h-3.778v-3.773zm42.18 0v3.773H95.197v-3.773zm0-14.48v3.778H89.527v-3.779zm3.144 75.535v.04a5.665 5.665 0 0 1 5.663 5.483l.002.143v64.845a5.665 5.665 0 0 1-5.521 5.664l-.144.002H85.754a5.665 5.665 0 0 1-5.663-5.493l-.002-.173v-64.845a5.667 5.667 0 0 1 5.521-5.664l.144-.001zm0 2.521H85.754a3.15 3.15 0 0 0-3.147 3.032l-.003.113v64.845a3.155 3.155 0 0 0 3.037 3.148l.113.002h52.876a3.155 3.155 0 0 0 3.147-3.018l.002-.112v-64.845a3.15 3.15 0 0 0-3.036-3.143l-.113-.002zm-45.324 57.932v3.779h-3.778v-3.779zm42.18.03v3.72H95.197v-3.72zm-42.18-16.397v3.778h-3.778v-3.778zm42.18.029v3.72H95.197v-3.72zm-42.18-15.763v3.774h-3.778v-3.774zm42.18.03v3.715H95.197V150zm0-14.51v3.778H89.527v-3.778zm18.393-65.172v3.144h18.883v85.531h-18.883v3.149h22.032V70.32h-3.149z"/><path fill="#fe0902" d="M19.332 14.795c3.723-6.107 9.857-9.669 16.053-11.737l.845-.273l.844-.255c.422-.123.843-.24 1.263-.35l.837-.213c.14-.034.279-.068.417-.1l.83-.19l.411-.089l.818-.167l.809-.152l.798-.14l.787-.126l.773-.115l.759-.102l.743-.091l.726-.081l.708-.071l1.024-.09l.975-.07l.922-.052l1.002-.043l.917-.026l.56-.009l.516-.004h.471l.617.008l.348.007l.635.022l.28.014v15.114c-13.368-1.272-19.333 2.766-21.963 7.069l-.237.404a13.263 13.263 0 0 0-.845 1.813l-.142.396c-.023.065-.045.13-.066.196l-.121.39l-.108.383l-.094.376c-.015.062-.03.124-.043.185l-.077.365l-.034.18l-.06.35l-.052.34l-.041.329l-.047.47l-.031.439l-.015.344l-.007.319v.29l.005.26l.01.23l.017.28l.032.33v5.553l-.033 11.337l-.04 8.17l-.046 6.872l-.05 5.807l-.05 4.573l-.058 4.452l-.06 3.795l-.076 4.021l-.047 2.095l-.051 1.98l-.066 2.205l-.023.69l-.002 1.276l-.007.781l-.009.528l-.02.798l-.032.772l-.026.47l-.03.472l-.038.474l-.068.712l-.054.476l-.063.477l-.071.477l-.039.238l-.085.476l-.046.238l-.1.475l-.11.474l-.121.473c-.043.157-.087.314-.134.47l-.146.47l-.158.
![SQLite](https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/-RabbitMQ-FF6600?logo=rabbitmq&logoColor=white)

# Instruções de Uso
Para executar este conjunto de microserviços, você precisa ter o Docker instalado na sua máquina. Em seguida, siga estas etapas simples:

## Instalação
1. Certifique-se de que o Docker está em execução na sua máquina.
2. Clone este repositório em sua máquina local:
   git clone https://github.com/estrela2704/microsservices.git
3. Navegue até o diretório onde o repositório foi clonado:
   cd microsservices
4. No terminal, execute o comando Docker Compose para iniciar os microserviços:
   docker-compose up -d
   
## Acesso
Após a inicialização, os microserviços estarão disponíveis nas seguintes portas:
- Microsserviço de Autenticação: localhost:3000
- Microsserviço de Produtos: localhost:3001
- Microsserviço de Pedidos: localhost:3002
- Microsserviço de Pagamentos: localhost:3003
- Microsserviço de Notificações: localhost:3004

## Modo de uso
 1. Registre um usuário com a API de autenticação.
 2. Crie uma ordem de compra com a API de pedidos.
 3. Liste os produtos disponíveis ou cadatre-os na API de Produtos.
 4. Adicione um produto ao seu pedido na API pedidos, também é possivel remover produtos do pedido.
 5. Faça o pagamento da ordem de compra na API de pagamentos.
 6. Verifique seu e-mail.
  
Para acessar a documentação Swagger de qualquer microserviço, basta abrir um navegador da web e navegar para localhost:PORTA/api, onde PORTA é a porta correspondente ao microserviço que você deseja acessar.

Obs: lembre-se de registrar um usuário com um e-mail real, para que possa receber a notificação.

## Autor
- Felipe Estrela de Albuquerque
