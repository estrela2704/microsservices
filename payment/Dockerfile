FROM node:latest

# Instala o netcat
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY start.sh /start.sh

RUN chmod +x /start.sh

EXPOSE 3003

CMD ["/start.sh"]
