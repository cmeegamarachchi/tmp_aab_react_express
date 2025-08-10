#!/bin/bash

echo "🚀 Full Stack Application Deployment Guide"
echo "=========================================="
echo ""

echo "📁 Current project structure:"
echo "frontend/          - React SPA"
echo "server/            - Express API server"
echo "scripts/           - Build scripts"
echo "dist/             - Build output"
echo ""

echo "🔧 Build commands:"
echo "./scripts/build-frontend.sh    - Build React app"
echo "./scripts/build-api.sh         - Build Express server"
echo "./build.sh                     - Build everything"
echo ""

echo "🏃 Run commands:"
echo "cd dist/api && npm start       - Start production server"
echo "cd server && npm run dev       - Start development server"
echo "cd frontend && npm run dev     - Start frontend dev server"
echo ""

echo "🌐 API Endpoints:"
echo "GET  /api/health               - Health check"
echo "GET  /api/users                - Get users"
echo "POST /api/users                - Create user"
echo "DELETE /api/users/:id          - Delete user"
echo "GET  /api/products             - Get products"
echo ""

echo "🔧 Environment Variables:"
echo "PORT=8324                      - Server port"
echo "FRONTEND_DIST=../frontend      - Frontend path (relative to server)"
echo "CORS_ORIGIN=*                  - CORS configuration"
echo ""

echo "📋 Adding New API Handlers:"
echo "1. Create file in server/api/handlers/"
echo "2. Export: { route, method, handler }"
echo "3. Run: ./scripts/build-api.sh"
echo "4. Restart server"
echo ""

echo "✅ Your full stack app is ready!"
echo "Server serves both API (/api/*) and frontend (/*)"
