pipeline {
    agent any

    stages {
        stage('dependencies') {
            steps {
                echo "*******************************************************************"
                echo "installation of dependencies has started"
                bat "npm i"
                echo "finished installing dependencies"
                echo "*******************************************************************"
            }
        }
        
        stage('tests') {
            steps {
                echo "*******************************************************************"
                echo "running tests"
                bat "npm test -- --watchAll=false --testMatch '**/src/**/*.test.js'"
                echo "running tests end"
                echo "*******************************************************************"
            }
        }
        
        stage('build') {
            steps {
                echo "*******************************************************************"
                echo "start of the build"
                bat "npm run build"
                echo "end of build"
                echo "*******************************************************************"
            }
        }
        
        stage('deployment') {
            steps {
                echo "*******************************************************************"
                load "C:/.env"
                echo "start of deployment"
                bat "surge --project ./build --domain r-rstore.surge.sh"
                echo "end of deployment"
                echo "*******************************************************************"
            }
        }
    }
}
