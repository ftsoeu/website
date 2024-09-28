FROM node:lts-alpine3.18 AS base

RUN mkdir -p /ftso/webapp

WORKDIR /ftso/webapp

COPY package.json ./

COPY src ./src

RUN yarn install

COPY tsconfig.json tsconfig.spec.json next.config.js tailwind.config.ts  ./

RUN yarn build

COPY .next ./out

EXPOSE 3000

CMD ["npx", "serve", "out"]