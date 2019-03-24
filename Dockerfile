FROM node:10-alpine
EXPOSE 8080
COPY . /home/app
WORKDIR /home/app
RUN npm install
RUN npm run build
CMD [ "node", "dist/server.js" ]
