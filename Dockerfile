# Étape de build
FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances pour le build
COPY package*.json ./
RUN npm ci

# Build de l'application
COPY . .
RUN npm run build

# Étape de production
FROM node:18-alpine

WORKDIR /app

# Installation des dépendances de production uniquement
COPY package*.json ./
RUN npm ci --only=production

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/dist ./dist
COPY .env.production ./.env

EXPOSE 3000

CMD ["node", "dist/main"]