# CI/CD Midterm Application

A Node.js Express app with a full CI/CD pipeline using both GitHub Actions and Jenkins, Docker support, and a modern API/UI.

## 🚀 Features

- RESTful API (Calculator & String Utils)
- Modern HTML UI
- Dockerized
- CI/CD with GitHub Actions **and** Jenkins
- Health check endpoint
- Linting & Testing

## 🛠️ Setup & Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

## 🏃 Running Locally

```bash
npm start
# or
PORT=3001 node src/app.js
```

## 🐳 Running with Docker

```bash
docker-compose up --build
```
App will be available at [http://localhost:3001/](http://localhost:3001/)

## 🧪 Testing

```bash
npm test
```

## 🔍 Linting

```bash
npm run lint
```

## 🌍 API Endpoints

- `GET /api/calculator/add?a=5&b=3`
- `GET /api/calculator/subtract?a=5&b=3`
- `GET /api/string/reverse?text=hello`
- `GET /api/string/capitalize?text=hello`
- `GET /health`

## 🔄 CI/CD Pipeline

### GitHub Actions
- Workflow file: `.github/workflows/ci.yml`
- **Runs on every push and PR to `main` or `develop`**
- Installs dependencies, lints, tests, and builds Docker image
- Simulates deployment to dev/prod environments
- To trigger prod deployment manually, use the Actions tab and select the workflow with `prod` environment

### Jenkins
- Pipeline file: `Jenkinsfile`
- Stages: checkout, install, lint, test, Docker build/push, deploy
- Supports parameterized builds for `dev` and `prod` environments
- To trigger prod deployment, select `prod` in Jenkins parameters
- Requires Docker and Jenkins setup (see below)

## 🐙 Docker Image
- Build: `docker build -t midterm-app .`
- Run: `docker run -p 3001:3001 midterm-app`

## 🚀 Deployment

- **Local:** `npm start`
- **Docker:** `docker-compose up --build`
- **Cloud:** Deploy Docker image to your preferred cloud provider

## 📝 Jenkins Setup (if required)
1. Install Jenkins and Docker on your server or use Jenkins in Docker
2. Add your repo as a Jenkins pipeline project
3. Add DockerHub credentials as `dockerhub-creds` in Jenkins
4. Run the pipeline and select the environment (dev/prod)

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## 📝 License

MIT

---

**For more details, see the full documentation in the repo.**

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)
- GitHub account (for CI/CD pipeline)

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ci-cd-midterm-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the appropriate environment file:

```bash
# For development
cp config/dev.env .env

# For production
cp config/prod.env .env
```

### 4. Run the Application

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Specific Test Files
```bash
# Unit tests only
npm test -- tests/calculator.test.js
npm test -- tests/stringUtils.test.js

# Integration tests only
npm test -- tests/integration.test.js
```

### Test Coverage Report
After running `npm run test:coverage`, view the coverage report at:
- HTML: `coverage/lcov-report/index.html`
- Console: Coverage summary in terminal

## 🔍 Code Quality

### Linting
```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## 🐳 Docker

### Build Docker Image
```bash
npm run docker:build
```

### Run Docker Container
```bash
npm run docker:run
```

### Manual Docker Commands
```bash
# Build image
docker build -t ci-cd-midterm-app .

# Run container
docker run -p 3000:3000 ci-cd-midterm-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production ci-cd-midterm-app
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The CI/CD pipeline is defined in `.github/workflows/ci.yml` and includes the following stages:

#### 1. **Build Stage** (3%)
- ✅ Install dependencies
- ✅ Build application
- ✅ Upload build artifacts

#### 2. **Test Stage** (4%)
- ✅ Run unit tests (12+ tests)
- ✅ Run integration tests (8+ tests)
- ✅ Generate test coverage
- ✅ Upload test results and coverage reports

#### 3. **Lint/Static Analysis** (2%)
- ✅ ESLint code quality checks
- ✅ Auto-fix formatting issues
- ✅ Fail pipeline on critical issues

#### 4. **Docker Build & Push** (5%)
- ✅ Build Docker image
- ✅ Push to GitHub Container Registry
- ✅ Tag with branch, commit, and semantic versions

#### 5. **Multi-Environment Deployment** (4%)

**Development Environment:**
- ✅ Automatically triggered on pushes to `develop` branch
- ✅ Manual trigger via workflow_dispatch
- ✅ Environment: `development`

**Production Environment:**
- ✅ Automatically triggered on pushes to `main` branch
- ✅ Manual trigger via workflow_dispatch
- ✅ Environment: `production`
- ✅ Requires approval (GitHub Environments)

#### 6. **Security Scanning**
- ✅ npm audit for vulnerability scanning
- ✅ Snyk security analysis (optional)

### Pipeline Triggers

1. **Automatic Triggers:**
   - Push to `main` branch → Deploy to Production
   - Push to `develop` branch → Deploy to Development
   - Pull Request to `main`