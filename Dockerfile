FROM node:latest
RUN apt-get update
WORKDIR ./:user/src/app
COPY . ./
RUN npm install

EXPOSE 8000
CMD ["npm", "start:dev"]
