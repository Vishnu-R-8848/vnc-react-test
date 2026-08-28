# Stage 1: Build the Vite Frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production Server Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend assets and server files
COPY --from=builder /app/dist ./dist
COPY server/ ./server

EXPOSE 5000

CMD ["node", "server/index.js"]
