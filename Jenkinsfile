node {
   try {   
     stage('Checkout') {
        checkout scm
      }
      stage('Pulling...') {
        sh 'git pull -f'
      }
      stage('Build Docker image') {
        sh 'docker-compose build --no-cache'
      }
      stage('Deployment...') {
        sh 'docker-compose up -d'
      }
    }
   catch (err) {
    throw err
  }
 }
