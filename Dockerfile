FROM node:11-alpine

WORKDIR /var/www
COPY dist/ /var/www/dist/

CMD ls -l /var/www && node /var/www/dist/server.js
