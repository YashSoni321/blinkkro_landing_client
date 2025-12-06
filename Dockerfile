# ===========================
# 1️⃣ Install Dependencies
# ===========================
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force


# ===========================
# 2️⃣ Build Stage
# ===========================
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source files
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Build Next.js (Standalone mode)
RUN npm run build


# ===========================
# 3️⃣ Production Runner
# ===========================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Create non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy standalone server output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy public folder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 80

# Start the standalone server
CMD ["node", "server.js", "--port", "80"]

