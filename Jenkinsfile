pipeline{
    //untuk define yang mau di run
    agent{
        node{
            label 'docker-chrome'
        }
    }
    //kumpulan task yang akan kita assign di job tersebut
    //task: run Automation test
    //1. clone source code, masuk ke dalam project
    //2. install depedencies
    //3. run test
    //4 generate report
    stages{
        stage('install dependencied'){
            steps{
                //semua operation ditulis disini
                sh "npm ci"
            }
        }

        stage('run test'){
             steps{
              sh "npm test"
            }
        }

        stage('Generate report'){
             steps{
                sh "npm run reporter"
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: true, 
                    reportDir: 'cypress/reports/', 
                    reportFiles: 'index.html', 
                    reportName: 'BDD Atlas MultiCucumber Reporter', 
                    reportTitles: ''])
            }
        }
    }
    // yang akan di execute setelah semua stages
    //always, failed, success
    post{
        always{

        }
    }
}