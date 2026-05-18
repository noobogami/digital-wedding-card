# Multi-stage build for optimized production image

# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

RUN apk add --no-cache nodejs

COPY --from=builder /app/dist /usr/share/nginx/html
COPY scripts/generate-wedding-config.mjs /scripts/generate-wedding-config.mjs
COPY index.html.template /index.html.template
COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    client_max_body_size 50M; \
    location ~* \.(mp3|mp4|ogg|wav)$ { \
        add_header Content-Type audio/mpeg; \
        add_header Cache-Control "public, max-age=31536000"; \
        try_files $uri =404; \
    } \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]
