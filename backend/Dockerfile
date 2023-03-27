FROM node:19-alpine3.16

RUN npm install -g nodemon

WORKDIR /backend_app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]