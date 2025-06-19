#!/bin/bash

# CI/CD Midterm Application Deployment Script
# Usage: ./scripts/deploy.sh [dev|prod]

set -e

ENVIRONMENT=${1:-dev}
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
VERSION=$(node -p "require('./package.json').version")

echo "🚀 Starting deployment to $ENVIRONMENT environment..."
echo "📅 Timestamp: $TIMESTAMP"
echo "📦 Version: $VERSION"

# Validate environment
if [[ "$ENVIRONMENT" != "dev" && "$ENVIRONMENT" != "prod" ]]; then
    echo "❌ Error: Environment must be 'dev' or 'prod'"
    exit 1
fi

# Load environment-specific configuration
if [[ "$ENVIRONMENT" == "dev" ]]; then
    echo "🔧 Loading development configuration..."
    cp config/dev.env .env
    DEPLOY_PATH="./deployment/dev"
    TAG="dev-$TIMESTAMP"
else
    echo "🔧 Loading production configuration..."
    cp config/prod.env .env
    DEPLOY_PATH="./deployment/prod"
    TAG="prod-$TIMESTAMP"
fi

# Create deployment directory
mkdir -p "$DEPLOY_PATH"

# Run tests
echo "🧪 Running tests..."
npm test

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build application
echo "🔨 Building application..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
cp -r src/ "$DEPLOY_PATH/"
cp package*.json "$DEPLOY_PATH/"
cp .env "$DEPLOY_PATH/"

# Create deployment info
cat > "$DEPLOY_PATH/deployment-info.txt" << EOF
Deployment Information
=====================
Environment: $ENVIRONMENT
Version: $VERSION
Timestamp: $TIMESTAMP
Tag: $TAG
Commit: $(git rev-parse HEAD 2>/dev/null || echo "N/A")
Branch: $(git branch --show-current 2>/dev/null || echo "N/A")
Deployed by: $(whoami)
EOF

# Build Docker image (optional)
if command -v docker &> /dev/null; then
    echo "🐳 Building Docker image..."
    docker build -t ci-cd-midterm-app:$TAG .
    echo "✅ Docker image built: ci-cd-midterm-app:$TAG"
fi

# Create deployment summary
echo "📋 Deployment Summary:"
echo "   Environment: $ENVIRONMENT"
echo "   Version: $VERSION"
echo "   Tag: $TAG"
echo "   Deployment Path: $DEPLOY_PATH"
echo "   Timestamp: $TIMESTAMP"

# Simulate deployment
echo "🚀 Simulating deployment to $ENVIRONMENT environment..."
sleep 2

echo "✅ Deployment to $ENVIRONMENT completed successfully!"
echo "📁 Deployment artifacts available in: $DEPLOY_PATH"

# Cleanup
rm -f .env

echo "🎉 Deployment script completed!" 