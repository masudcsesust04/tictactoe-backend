FROM node:14-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

WORKDIR /usr/src/app
COPY package*.json ./

#USER node

RUN npm install

#COPY --chown=node:node . .
COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]

