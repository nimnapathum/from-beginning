# ---- Stage 1: Build React App ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build


# ---- Stage 2: Nginx with Non-Root User ----
FROM nginx:stable-alpine

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy build files with correct permissions
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R appuser:appgroup /usr/share/nginx/html

# Update Nginx to run as non-root
RUN sed -i 's/user  nginx;/user  appuser;/g' /etc/nginx/nginx.conf

# Switch to non-root user
USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
