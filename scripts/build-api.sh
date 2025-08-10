#!/bin/bash

# Build API Script
echo "🏗️  Building API server..."

# Navigate to server directory
cd "$(dirname "$0")/../server" || exit 1

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing server dependencies..."
    npm install
fi

# Create destination directory
DEST_DIR="../dist/api"
mkdir -p "${DEST_DIR}"

# Copy server files to destination (excluding node_modules and .git)
echo "📁 Copying server files to dist/api..."
rsync -av --exclude='node_modules' --exclude='.git' --exclude='*.log' . "${DEST_DIR}/"

# Install production dependencies in destination
cd "${DEST_DIR}" || exit 1
echo "📦 Installing production dependencies..."
npm install --production

echo "✅ API build complete! Server files copied to dist/api"