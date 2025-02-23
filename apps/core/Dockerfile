# --- Build Stage ---
    FROM oven/bun:1.0 as builder

    # Set working directory
    WORKDIR /app
    
    # Copy only package.json and lockfile first (dependency caching)
    COPY package.json bun.lockb ./
    
    # Copy workspace folders for TurboRepo before running install
    COPY apps ./apps
    COPY packages ./packages
    
    # Disable Husky in Docker
    ENV HUSKY=0
    
    # Install dependencies (now workspaces are available)
    RUN bun install --frozen-lockfile
    
    # Copy the rest of the project
    COPY . .
    
    # Build the Next.js application
    RUN bun run build:core
    
    # --- Production Stage ---
    FROM oven/bun:1.0
    
    WORKDIR /app
    
    # Copy only necessary files from the builder stage
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./
    COPY --from=builder /app/bun.lockb ./
    
    # Expose the Next.js default port
    EXPOSE 3000
    
    # Start the application
    CMD ["bun", "run", "start:core"]