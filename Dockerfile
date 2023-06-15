FROM node:19.7-alpine AS sk-build

RUN apk add --no-cache git

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .

ENV PORT 3000
ENV API_BASE_URL 'https://eu.api.ovh.com/1.0'
ENV AK ''
ENV AS ''
ENV FORCE_HTTP 'disabled'
ENV NODE_ENV 'production'


RUN pnpm run build

CMD ["node", "-r", "dotenv/config", "build" ]