# Use a specific Bun's official Docker image
# Use Node 18 as a base image
FROM node:20-alpine as builder



# Continue with your existing Bun image
# FROM docker.arvancloud.ir/oven/bun:1.1.38 as builder
# SHELL ["/bin/bash", "-c"]

# If needed, you can copy files from the Node base image
# COPY --from=node_base /some_path /another_path

# Set the working directory
WORKDIR /app

RUN npm i -g bun

# Copy all files to the container
COPY . .

# Install dependencies using 
RUN bun install

# Build the project using Bun
RUN bun run build 

# Use a lighter specific image for running the app
# FROM docker.arvancloud.ir/oven/bun:1.1.38 as runner
FROM node:20-alpine as runner

# Set the working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app /app

# Set the working directory to your core app
WORKDIR /app/apps/core

# Expose the port that your app listens on
EXPOSE 3000

# Optionally set environment variable
ENV NODE_ENV=production

# Start the core app
CMD ["bun", "run", "start"]