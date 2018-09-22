FROM node:8.12.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

ENV NODE_ENV production

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]