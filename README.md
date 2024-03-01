## Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/-TypeORM-376ECC?logo=typeorm&logoColor=white)
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
