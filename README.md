# CI/CD Midterm Application

<<<<<<< HEAD
A Node.js Express application demonstrating Continuous Integration and Continuous Deployment (CI/CD) using GitHub Actions with multi-environment deployment support.

## 🎯 Project Overview

This project showcases a complete CI/CD pipeline implementation for a Node.js application with:
- **GitHub Actions** for automated CI/CD
- **Multi-environment deployment** (dev/prod)
- **Docker containerization**
- **Automated testing** with Jest
- **Code quality checks** with ESLint
- **Security scanning** with npm audit

## 🚀 Features

- **Calculator API**: Basic arithmetic operations
- **String Utilities**: String manipulation functions
- **Static Web UI**: Interactive web interface
- **RESTful API**: JSON endpoints for all operations
- **Comprehensive Testing**: Unit and integration tests
- **Docker Support**: Containerized deployment
- **Multi-Environment**: Development and production configurations
=======
A Node.js Express app with a full CI/CD pipeline using GitHub Actions, Docker support, and a modern API/UI.

## 🚀 Features

- RESTful API (Calculator & String Utils)
- Modern HTML UI
- Dockerized
- CI/CD with GitHub Actions
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

## 🐙 Docker Image
- Build: `docker build -t midterm-app .`
- Run: `docker run -p 3001:3001 midterm-app`

## 🚀 Deployment

- **Local:** `npm start`
- **Docker:** `docker-compose up --build`
- **Cloud:** Deploy Docker image to your preferred cloud provider

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## 📝 License

MIT

---

**For more details, see the full documentation in the repo.**
>>>>>>> fbfe2f2 (Initial commit: Add CI/CD Midterm project)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)
- GitHub account (for CI/CD pipeline)

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

The application will be available at `http://localhost:3001`

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm test -- --coverage
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

### Build and Run with Docker Compose
```bash
docker-compose up --build
```
This will build the image and run the application in a container. It will be accessible at `http://localhost:3001`.

### Manual Docker Commands
```bash
# Build image
docker build -t ci-cd-midterm-app .

# Run container
docker run -p 3001:3001 ci-cd-midterm-app
```

## 🔄 CI/CD Pipeline

The CI/CD pipeline is defined in `.github/workflows/ci.yml` and is designed to be simple and efficient.

### Pipeline Stages

1.  **Build and Test:**
    *   Checks out the code.
    *   Installs Node.js and dependencies.
    *   Runs linting to ensure code quality.
    *   Executes unit and integration tests with Jest and generates a coverage report.
    *   Performs a security audit with `npm audit`.

2.  **Build and Push Docker Image:**
    *   Builds a Docker image of the application.
    *   Pushes the image to the GitHub Container Registry.
    *   Tags the image with the commit SHA and `latest` (only for the `main` branch).

3.  **Deploy:**
    *   A single, consolidated job that deploys to either `development` or `production`.
    *   The environment is automatically selected based on the branch:
        *   `develop` branch -> `development` environment.
        *   `main` branch -> `production` environment.
    *   Can also be triggered manually via `workflow_dispatch`.

### Pipeline Triggers

<<<<<<< HEAD
The CI/CD pipeline is triggered by:

1.  **Push to `main` branch:** Triggers a full build, test, and deployment to the `production` environment.
2.  **Push to `develop` branch:** Triggers a full build, test, and deployment to the `development` environment.
3.  **Pull Request:** Triggers the `build-and-test` job to validate changes.
4.  **Manual Trigger:** Can be run manually from the GitHub Actions tab using `workflow_dispatch`.

## 🚀 Deployment

You can deploy this application in several ways:

*   **Local:** Run `npm start` for a local development server.
*   **Docker:** Use `docker-compose up --build` to run the application in a container.
*   **CI/CD:** Push to the `develop` or `main` branches to trigger an automatic deployment to the corresponding environment.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

## 📝 License

This project is licensed under the MIT License.

---

**For more details, see the full documentation in the repo.** 
=======
1. **Automatic Triggers:**
   - Push to `main` branch → Deploy to Production
   - Push to `develop` branch → Deploy to Development
   - Pull Request to `main` or `develop` → Run tests and linting

2. **Manual Triggers:**
   - GitHub Actions tab → Select workflow → Run workflow
   - Choose environment (dev/prod) when manually triggered

### How to Trigger the Pipeline

1. **Automatic (Recommended):**
   - Push code to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

2. **Manual:**
   - Go to GitHub repository → Actions tab
   - Select "CI/CD Pipeline" workflow
   - Click "Run workflow"
   - Choose branch and environment
   - Click "Run workflow"

### Environment Variables

The pipeline uses the following secrets (configure in GitHub repository settings):
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password/token
- `REGISTRY`: Container registry URL (default: ghcr.io)

### Pipeline Artifacts

- **Build artifacts:** Available for download after successful build
- **Test coverage:** HTML report generated and uploaded
- **Docker images:** Pushed to GitHub Container Registry with tags:
  - `latest` (main branch)
  - `dev` (develop branch)
  - `v1.0.0` (tagged releases)

### Monitoring & Debugging

- **Pipeline status:** Check GitHub Actions tab for real-time status
- **Logs:** Detailed logs available for each job and step
- **Notifications:** Configure email/webhook notifications in repository settings
- **Badges:** Add CI status badge to README.md

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD pipeline
├── src/                  # Application source code
├── tests/               # Test files
├── config/              # Environment configurations
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🔧 Troubleshooting

### Common Issues

1. **Pipeline fails on linting:**
   ```bash
   npm run lint:fix
   git add . && git commit -m "Fix linting issues"
   ```

2. **Tests failing:**
   ```bash
   npm test
   # Check test output and fix failing tests
   ```

3. **Docker build fails:**
   ```bash
   docker build -t test-image .
   # Check Dockerfile and dependencies
   ```

4. **Environment variables missing:**
   - Check GitHub repository settings → Secrets
   - Ensure all required secrets are configured

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Review the workflow file: `.github/workflows/ci.yml`
- Ensure all prerequisites are installed
- Verify repository permissions and secrets configuration

```markdown
![CI/CD Pipeline](https://github.com/{username}/{repo-name}/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## 🚀 Quick Start

1. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install
   ```

2. **Run locally:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3001/health
   curl http://localhost:3001/api/calculator/add?a=5&b=3
   ```

4. **Trigger CI/CD:**
   - Push to `develop` branch for dev deployment
   - Merge to `main` branch for production deployment

## 📊 Project Structure

```
├── .github/workflows/    #
>>>>>>> fbfe2f2 (Initial commit: Add CI/CD Midterm project)
