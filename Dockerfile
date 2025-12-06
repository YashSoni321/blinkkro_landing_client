# ===========================
# 1️⃣ Build Stage
# ===========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# ===========================
# 2️⃣ Production Stage
# ===========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built output and package files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Install only production dependencies
RUN npm ci --omit=dev

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start", "--", "-p", "80"]

