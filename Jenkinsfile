
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting source code from GitHub'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building the Docker image'
                bat 'docker build -t devops-cicd-app:1.0 .'
            }
        }

        stage('Verify Image') {
            steps {
                echo 'Checking that the Docker image exists'
                bat 'docker image inspect devops-cicd-app:1.0'
            }
        }
    }

    post {
        success {
            echo 'CI pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}
