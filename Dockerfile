FROM node:11-alpine

STOPSIGNAL SIGTERM

WORKDIR /var/www

RUN apk add -U nginx bash

COPY deploy/nginx/nginx.conf /etc/nginx/nginx.conf
COPY deploy/nginx/vhost.conf /etc/nginx/conf.d/default.conf
COPY deploy/entrypoint.sh /entrypoint.sh
COPY dist /var/www

ENTRYPOINT ["/entrypoint.sh"]
