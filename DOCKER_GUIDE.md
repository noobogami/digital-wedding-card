# 🐳 Docker Deployment Guide

Complete guide for building and deploying your wedding card using Docker.

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View in browser
# Visit: http://localhost:8080
```

### Option 2: Using Docker Commands

```bash
# Build the image
docker build -t digital-wedding-card .

# Run the container
docker run -d -p 8080:80 --name wedding-card digital-wedding-card

# View in browser
# Visit: http://localhost:8080
```

## 📦 What Gets Built

The Docker image:
- ✅ Uses **Node.js 18 Alpine** for building (lightweight)
- ✅ Builds production-optimized React bundle
- ✅ Serves with **nginx Alpine** (only ~23MB!)
- ✅ Configured for single-page application routing
- ✅ Exposes port 80 internally (mapped to 8080 on host)

## 🔧 Docker Commands Reference

### Build Commands

```bash
# Build image
docker build -t digital-wedding-card .

# Build with no cache (fresh build)
docker build --no-cache -t digital-wedding-card .
```

### Run Commands

```bash
# Run container (foreground)
docker run -p 8080:80 digital-wedding-card

# Run container (background/detached)
docker run -d -p 8080:80 --name wedding-card digital-wedding-card

# Run on different port (e.g., 3000)
docker run -d -p 3000:80 --name wedding-card digital-wedding-card
```

### Management Commands

```bash
# List running containers
docker ps

# Stop container
docker stop wedding-card

# Start container
docker start wedding-card

# Restart container
docker restart wedding-card

# Remove container
docker rm wedding-card

# View logs
docker logs wedding-card

# Follow logs (live)
docker logs -f wedding-card
```

### Docker Compose Commands

```bash
# Start services (build if needed)
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Rebuild and restart
docker-compose up -d --build

# Remove everything (including volumes)
docker-compose down -v
```

## 🌐 Deployment Options

### 1. Deploy to Cloud Platform

#### **DigitalOcean / AWS / Google Cloud**
```bash
# Build and push to registry
docker build -t your-registry/wedding-card:latest .
docker push your-registry/wedding-card:latest

# Deploy on cloud platform
# Follow platform-specific instructions
```

#### **Heroku**
```bash
# Login to Heroku
heroku login
heroku container:login

# Create app
heroku create your-wedding-card

# Build and push
heroku container:push web -a your-wedding-card
heroku container:release web -a your-wedding-card

# Open in browser
heroku open -a your-wedding-card
```

### 2. Deploy to VPS (Your Own Server)

```bash
# On your server:
git clone your-repo
cd digital-wedding-card
docker-compose up -d

# Configure nginx/reverse proxy if needed
```

### 3. Deploy to Docker Hub

```bash
# Build image
docker build -t your-username/wedding-card:latest .

# Login to Docker Hub
docker login

# Push to Docker Hub
docker push your-username/wedding-card:latest

# Others can now use:
docker pull your-username/wedding-card:latest
docker run -d -p 8080:80 your-username/wedding-card:latest
```

## 🔒 Security Best Practices

1. **Use specific versions** instead of `latest` for production
2. **Don't include sensitive data** in the image
3. **Run as non-root user** (nginx already does this)
4. **Keep base images updated** regularly
5. **Scan for vulnerabilities**: `docker scan digital-wedding-card`

## ⚙️ Customization

### Change Port

Edit `docker-compose.yml`:
```yaml
ports:
  - "3000:80"  # Change 3000 to your preferred port
```

Or in docker run:
```bash
docker run -d -p 3000:80 digital-wedding-card
```

### Add SSL/HTTPS

Use a reverse proxy like nginx or Traefik, or deploy to platforms that handle SSL automatically (Vercel, Netlify, Heroku).

### Custom nginx Configuration

Edit the Dockerfile's nginx config section to customize server behavior.

## 📊 Image Size

- **Builder stage**: ~500MB (temporary, not in final image)
- **Final image**: ~23-30MB (nginx alpine + built assets)

## 🐛 Troubleshooting

### Container won't start
```bash
# Check logs
docker logs wedding-card

# Check if port is already in use
lsof -i :8080  # On Mac/Linux
netstat -ano | findstr :8080  # On Windows
```

### Can't access on localhost
- Make sure container is running: `docker ps`
- Check port mapping: `docker port wedding-card`
- Try `http://localhost:8080` (not https)

### Build fails
```bash
# Clean build with no cache
docker build --no-cache -t digital-wedding-card .

# Check Docker disk space
docker system df
docker system prune  # Clean up if needed
```

## 🎉 Production Checklist

Before deploying to production:

- [ ] Update all placeholder content (names, dates, addresses)
- [ ] Configure map coordinates
- [ ] Add background music file
- [ ] Test on mobile devices
- [ ] Set up domain name
- [ ] Configure SSL certificate
- [ ] Test all animations and interactions
- [ ] Check loading performance
- [ ] Verify map and navigation work

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [nginx Documentation](https://nginx.org/en/docs/)

---

**Your wedding card is now containerized and ready to deploy anywhere! 🎊**

