pipeline {
  agent any

  environment {
    NODE_VERSION = '16'
    DOCKER_IMAGE = 'ci-cd-midterm'
    DOCKER_TAG = 'latest'
  }

  stages {
    stage('Setup') {
      steps {
        // Clean workspace
        cleanWs()
        // Checkout code
        checkout scm
        // Setup Node.js
        nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
          sh 'node --version'
          sh 'npm --version'
        }
      }
    }

    stage('Install Dependencies') {
      steps {
        nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
          sh 'npm ci'
        }
      }
    }

    stage('Lint') {
      steps {
        nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
          sh 'npm run lint'
        }
      }
    }

    stage('Test') {
      steps {
        nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
          sh 'npm test'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          // Build Docker image
          docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
        }
      }
    }

    stage('Deploy Development') {
      when {
        branch 'develop'
      }
      steps {
        script {
          echo 'Deploying to development environment'
          // Add deployment steps for dev environment
        }
      }
    }

    stage('Deploy Production') {
      when {
        branch 'main'
      }
      steps {
        script {
          echo 'Deploying to production environment'
          // Add deployment steps for prod environment
        }
      }
    }
  }

  post {
    always {
      // Clean up Docker images
      sh 'docker system prune -f'
      // Clean workspace
      cleanWs()
    }
    success {
      echo 'Pipeline completed successfully!'
    }
    failure {
      echo 'Pipeline failed! Check the logs for details.'
    }
  }
} 