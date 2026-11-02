
pipeline {
    agent any

    environment {
        SSH_KEY = '/var/jenkins_home/.ssh/id_ed25519'
        SSH_HOST = 'HP@host.docker.internal'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting source code from GitHub'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t devops-cicd-app:1.0 .'
            }
        }

        stage('Verify Image') {
            steps {
                echo 'Verifying Docker image'
                sh 'docker image inspect devops-cicd-app:1.0'
            }
        }

        stage('Transfer Image to Windows') {
            steps {
                echo 'Transferring image to Windows Docker Engine'

                sh '''
                    docker save devops-cicd-app:1.0 | ssh \
                    -i "$SSH_KEY" \
                    -o BatchMode=yes \
                    -o StrictHostKeyChecking=no \
                    "$SSH_HOST" "docker load"
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying application to Windows Docker'

                sh '''
                    ssh -i "$SSH_KEY" \
                    -o BatchMode=yes \
                    -o StrictHostKeyChecking=no \
                    "$SSH_HOST" "docker rm -f devops-cicd-deploy"

                    ssh -i "$SSH_KEY" \
                    -o BatchMode=yes \
                    -o StrictHostKeyChecking=no \
                    "$SSH_HOST" "docker run -d --name devops-cicd-deploy -p 3002:3000 --restart unless-stopped devops-cicd-app:1.0"
                '''
            }
        }
    }

    post {
        success {
            echo 'SCM Polling Automatic Trigger Test - SUCCESS!'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}
