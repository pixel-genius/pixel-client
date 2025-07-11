FROM node:18-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN npm install -g pnpm turbo
COPY . .
# RUN npm run prepare:ci
RUN turbo prune core --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm turbo

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
# Configure pnpm with better network settings and use Taobao registry
RUN pnpm install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN pnpm turbo build 

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Environment variables
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_BASE_URL_ATTACHMENT=${NEXT_PUBLIC_BASE_URL_ATTACHMENT}

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/core/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/core/.next/static ./apps/core/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/core/public ./apps/core/public

EXPOSE 3000

CMD node apps/core/server.js
