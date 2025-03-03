#!/bin/bash

# Variables
USER="ubuntu"
HOST="185.204.168.45"
APP_DIR="/home/ubuntu/pixel-client"

# Ensure SSH works without prompts
mkdir -p ~/.ssh
echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -H $HOST >> ~/.ssh/known_hosts

# Pull latest changes
ssh $USER@$HOST << 'EOF'
cd $APP_DIR
git pull origin main
docker-compose up -d --build  # If using Docker
# Restart app (for non-Docker apps)
# systemctl restart your-service
EOF