node {
   try {   
     stage('Checkout') {
        sh 'git pull -f'
      }
      stage('Environment') {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        sh 'docker -v'
        sh 'docker-compose -v'
        sh 'printenv'
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
