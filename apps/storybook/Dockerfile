# Base Image
FROM oven/bun:1.1.7 AS builder

# Set workdir
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN bun install --frozen-lockfile

# Build Storybook
RUN bun run build-storybook

# ---- Run Stage ----
FROM nginx:alpine AS runner

WORKDIR /usr/share/nginx/html

# Copy Storybook built files
COPY --from=builder /app/storybook-static /usr/share/nginx/html

EXPOSE 6006

CMD ["nginx", "-g", "daemon off;"]