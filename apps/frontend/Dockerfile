FROM node:18-alpine

WORKDIR "/frontend"

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD yarn start