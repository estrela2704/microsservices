FROM node:latest

# Instala o netcat
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get install -y dos2unix

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY start.sh /start.sh

RUN chmod +x /start.sh

RUN dos2unix /start.sh

EXPOSE 3004

CMD ["sh", "/start.sh"]
