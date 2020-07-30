node {
   try {   
     stage('Checkout') {
        sh 'git reset --hard'
        sh 'git pull develop -f'
      }
      stage('Environment') {
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        sh 'docker -v'
        sh 'docker-compose -v'
        sh 'printenv'
      }
      stage('Build Docker image') {
        sh 'docker-compose build'
      }
      stage('Deployment...') {
        sh 'docker-compose up -d'
      }
    }
   catch (err) {
    throw err
  }
 }
