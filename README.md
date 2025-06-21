# CI/CD Midterm Application

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