FROM node:alpine AS build

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /dist /usr/share/nginx/quiz-lab.ru
