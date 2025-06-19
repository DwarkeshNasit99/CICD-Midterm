pipeline {
  agent any
  environment {
    REGISTRY = 'docker.io'
    IMAGE_NAME = 'midterm-app'
    NODE_ENV = 'development'
  }
  parameters {
    choice(name: 'ENVIRONMENT', choices: ['dev', 'prod'], description: 'Select deployment environment')
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          sh "docker build -t $REGISTRY/$IMAGE_NAME:${params.ENVIRONMENT} ."
        }
      }
    }
    stage('Push Docker Image') {
      when {
        expression { return params.ENVIRONMENT == 'prod' }
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin $REGISTRY'
          sh "docker push $REGISTRY/$IMAGE_NAME:${params.ENVIRONMENT}"
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          if (params.ENVIRONMENT == 'dev') {
            echo 'Deploying to development environment (simulated)'
          } else {
            echo 'Deploying to production environment (simulated)'
          }
        }
      }
    }
  }
} 