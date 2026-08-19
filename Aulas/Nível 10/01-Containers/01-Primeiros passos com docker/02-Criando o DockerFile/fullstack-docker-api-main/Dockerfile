FROM node:18-alpine3.20   

WORKDIR D:/imagemRockeatSeat 

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3333

RUN npm start