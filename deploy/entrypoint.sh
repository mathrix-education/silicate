#!/usr/bin/env bash
PORT_FROM_ENV=$(printenv PORT)
PORT=${PORT_FROM_ENV:-"8080"}
sed -i -E "s/CLOUD_RUN_PORT/${PORT}/g" /etc/nginx/conf.d/default.conf
/usr/sbin/nginx -g 'daemon off;'
