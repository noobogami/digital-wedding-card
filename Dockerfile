# Multi-stage build for optimized production image

# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Local config is gitignored; use example if missing (override on server before build)
RUN if [ ! -f src/config.js ]; then cp src/config.example.js src/config.js; fi

# Build the application
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - for SPA routing)
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Increase client body size for file uploads \
    client_max_body_size 50M; \
    \
    # Serve static files with correct MIME types \
    location ~* \.(mp3|mp4|ogg|wav)$ { \
        add_header Content-Type audio/mpeg; \
        add_header Cache-Control "public, max-age=31536000"; \
        try_files $uri =404; \
    } \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

