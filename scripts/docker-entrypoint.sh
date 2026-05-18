#!/bin/sh
set -eu
node /scripts/generate-wedding-config.mjs /usr/share/nginx/html/wedding-config.js
exec nginx -g 'daemon off;'
