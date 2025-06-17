# Étape 1 : Build
FROM node:18-alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm i

# Copier le reste du projet
COPY . .

# Compiler l'application
RUN npm run build

# Étape 2 : Exécution
FROM node:18-alpine AS runner

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires à l'exécution depuis l'étape de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Définir la variable d'environnement pour Next.js
ENV NODE_ENV production

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
