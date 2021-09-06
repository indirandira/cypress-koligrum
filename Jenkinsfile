pipeline{
    //untuk define yang mau di run
    agent{
        node{
            label 'docker-chrome'
        }
    }

    parameters{
        choice(name: 'RUN', choices: ['All', 'TAGS'], description: 'Run Test by')
        string(name: 'TAGS', defaultValues: '', description: 'Tags to execute')
    }
    //kumpulan task yang akan kita assign di job tersebut
    //task: run Automation test
    //1. clone source code, masuk ke dalam project
    //2. install depedencies
    //3. run test => all test or run by tag
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
                if(param.RUN=='All'){
                    sh "npm test" 
                }else{
                    sh "npm run cypress-tags -- run -e TAGS='${params.TAGS}'"
                }
              
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