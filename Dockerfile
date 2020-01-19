FROM node:11.1-alpine

ENV CONTAINER_PATH /var/www/vuejs-objects-viewer

WORKDIR $CONTAINER_PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]