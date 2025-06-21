# CI/CD Pipeline with GitHub Actions for a Node.js Application

This repository demonstrates a complete CI/CD pipeline for a simple Node.js web application using GitHub Actions. The pipeline automates testing, linting, security scanning, Docker image creation, and simulated multi-environment deployments.

## Project Overview

This project is a simple Node.js application built with Express. It provides a web interface and a set of RESTful APIs for basic calculator and string manipulation functionalities. The primary focus of this repository is not the application itself, but the robust CI/CD pipeline that supports it.

## Features

*   **RESTful API:** Provides endpoints for arithmetic operations (add, subtract, multiply, divide) and string utilities (capitalize, reverse).
*   **Unit & Integration Tests:** Comprehensive test suite using Jest to ensure code quality and reliability.
*   **Dockerization:** The application is containerized using Docker for consistent deployments.
*   **Automated CI/CD:** A fully automated pipeline using GitHub Actions.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.


## Installation and Running Locally

1.  **Clone the repository:**
```bash
    git clone https://github.com/DwarkeshNasit99/CICD-Midterm.git

2.  **Install dependencies:**
```bash
npm install
```

3.  **Start the application:**
```bash
npm start
```
    The server will be running at `http://localhost:3001`.

## Running Tests

The project uses Jest for testing. To run the tests locally, use the following command:

```bash
npm test
```

This will execute all unit and integration tests and generate a coverage report in the `./coverage` directory.

##  CI/CD Pipeline

The CI/CD pipeline is defined in the `.github/workflows/ci.yml` file and is the core of this project. It's designed to ensure code quality and automate the deployment process.

## Workflow Triggers

The workflow is automatically triggered by the following events:
*   **Push:** On any push to the `main` or `develop` branches.
*   **Pull Request:** On any pull request targeting the `main` or `develop` branches.
*   **Manual Trigger (`workflow_dispatch`):** Allows for manual execution of the pipeline, with the ability to choose the target deployment environment (`dev` or `prod`).

## Pipeline Jobs

The pipeline consists of three sequential jobs:

#### 1. `build-and-test`
This job runs on an `ubuntu-latest` runner and performs the following steps:
1.  **Checkout Code:** Checks out the repository's source code.
2.  **Setup Node.js:** Sets up the Node.js environment (v18.x).
3.  **Install Dependencies:** Installs project dependencies using `npm ci` for fast and reliable installs.
4.  **Run Linting:** Checks the code for style issues using `npm run lint`.
5.  **Run Tests:** Executes the Jest test suite with `npm test`.
6.  **Upload Test Coverage:** Uploads the LCOV coverage report to Codecov.
7.  **Security Audit:** Runs `npm audit` to check for vulnerabilities in dependencies.

#### 2. `docker-build`
This job depends on the successful completion of `build-and-test` and runs only on `push` events to `main` or `develop`, or on manual `workflow_dispatch` triggers.
1.  **Checkout Code:** Checks out the source code.
2.  **Set up Docker Buildx:** Initializes the Docker Buildx builder.
3.  **Log in to GHCR:** Authenticates with the GitHub Container Registry.
4.  **Extract Metadata:** Generates tags and labels for the Docker image. The tagging strategy is as follows:
    *   **`main` branch:** Image is tagged as `latest`.
    *   **`develop` branch:** Image is tagged as `dev`.
    *   **All pushes:** Image is also tagged with the commit SHA.
5.  **Build and Push:** Builds the Docker image and pushes it to the GitHub Container Registry.

#### 3. `deploy`
This job simulates a deployment to different environments based on the context of the workflow run. It depends on both `build-and-test` and `docker-build`.
1.  **Set Environment:** It determines the target environment:
    *   **`main` branch push:** Deploys to the `production` environment.
    *   **`develop` branch push:** Deploys to the `development` environment.
    *   **`workflow_dispatch`:** Deploys to the environment selected manually (`dev` or `prod`).
2.  **Deploy:** Executes a script that echoes the deployment details, including the target environment and the digest of the Docker image being "deployed". In a real-world scenario, this step would contain commands to deploy the container to a cloud service like AWS, Azure, or GCP.
3.  **Create Deployment Summary:** Generates a summary of the deployment, which is displayed on the GitHub Actions run page.

### Branching and Deployment Strategy

*   **`develop` branch:** This is the primary development branch. All feature branches are merged here. Every push to `develop` triggers a deployment to the **Development** environment.
*   **`main` branch:** This branch represents the stable, production-ready code. Changes are merged from `develop` to `main`. Every push to `main` triggers a deployment to the **Production** environment.

This strategy ensures that code is tested and deployed to a staging-like environment (`development`) before being promoted to `production`.

## 📖 API Reference

The application exposes the following API endpoints:

### Calculator API
*   `GET /api/add?a=<num>&b=<num>`
*   `GET /api/subtract?a=<num>&b=<num>`
*   `GET /api/multiply?a=<num>&b=<num>`
*   `GET /api/divide?a=<num>&b=<num>`

### String Utils API
*   `GET /api/capitalize?str=<string>`
*   `GET /api/reverse?str=<string>`
