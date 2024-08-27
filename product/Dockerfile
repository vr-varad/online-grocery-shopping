FROM node:22

WORKDIR /app/product

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8002

CMD [ "npm", "start" ]