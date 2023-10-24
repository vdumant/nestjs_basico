FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm i
RUN npm i -g @nestjs/cli
# RUN npm i -g pm2
COPY . .





