#!/bin/sh
set -eu
node /scripts/generate-wedding-config.mjs /usr/share/nginx/html/wedding-config.js config
node /scripts/generate-wedding-config.mjs /usr/share/nginx/html/index.html html
exec nginx -g 'daemon off;'
