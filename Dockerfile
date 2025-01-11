FROM node:lts-alpine3.18 AS base

RUN mkdir -p /ftso/webapp

WORKDIR /ftso/webapp

#COPY package.json ./

COPY . .

COPY /certs /etc/nginx/certs

RUN yarn install

#COPY tsconfig.json tsconfig.spec.json next.config.js tailwind.config.ts  ./

#RUN yarn build

#COPY .next ./out

EXPOSE 3000
CMD ["yarn", "dev"]
#CMD ["npx", "serve", "out"]