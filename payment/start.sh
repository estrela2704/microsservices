#!/bin/bash

# Função para verificar a disponibilidade do RabbitMQ
wait_for_rabbitmq() {
    until nc -z -v -w30 rabbitmq 5672; do
      echo "Aguardando RabbitMQ..."
      # Aguarde 5 segundos antes de tentar novamente
      sleep 5
    done
    echo "RabbitMQ está pronto!"
}

# Chama a função para aguardar o RabbitMQ
wait_for_rabbitmq

# Inicia o serviço de notificação
npm run start:prod
