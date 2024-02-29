# Use uma imagem base Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do microsserviço para dentro do contêiner
COPY . .

# Instale as dependências usando o npm ou yarn
RUN npm install

# Execute o comando de build (se necessário)
RUN npm run build

# Exponha a porta em que o microsserviço está ouvindo
EXPOSE 3001

# Comando para iniciar o microsserviço
CMD ["npm", "run", "start:prod"]
