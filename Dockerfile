FROM node:15.14.0

WORKDIR /app

ADD . .

RUN npm install --production
RUN npm run build

CMD [ "npm" ,"run", "start" ]