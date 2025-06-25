# Multi-stage build per ottimizzare l'immagine
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package files
COPY package*.json ./
RUN npm ci --only=production

# Copia codice sorgente
COPY . .

# Build dell'applicazione
RUN npm run build

# Stage di produzione
FROM node:18-alpine

WORKDIR /app

# Installa dipendenze di sistema necessarie
RUN apk add --no-cache dumb-init

# Crea utente non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copia dipendenze e build dalla fase builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/shared ./shared

# Cambia ownership dei file
RUN chown -R nextjs:nodejs /app
USER nextjs

# Espone la porta
EXPOSE 8080

# Variabile d'ambiente per la porta
ENV PORT=8080
ENV NODE_ENV=production

# Comando di avvio con dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]