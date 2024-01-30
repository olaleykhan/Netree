# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /app

COPY package.json ./
COPY client/package.json client/yarn.lock ./client/
RUN yarn install:client

COPY server/package.json server/yarn.lock ./server/
RUN yarn install:server
# COPY CLIENT and build
COPY client/ ./client/
RUN yarn --cwd server clean

# copy server files
COPY server/ server/

RUN yarn run build:client


USER node
CMD ["yarn", "start:server"]
EXPOSE 8000