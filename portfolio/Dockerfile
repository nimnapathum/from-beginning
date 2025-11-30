# ---- Stage 1: Build React App ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build


# ---- Stage 2: Secure Nginx + Choreo compliance ----
FROM nginx:stable-alpine

# Create user and group with UID/GID 10001
RUN addgroup -g 10001 appgroup && adduser -D -u 10001 -G appgroup appuser

# Copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# Fix file permissions for non-root user
RUN chown -R 10001:10001 /usr/share/nginx/html

# Update nginx to run as UID 10001
RUN sed -i 's/user  nginx;/user  appuser;/g' /etc/nginx/nginx.conf

# Switch to Choreo-compliant user
USER 10001

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
