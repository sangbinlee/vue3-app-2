pipeline {
    agent any

    environment {
        // NODE_ENV = 'development'
        // NODE_ENV = 'production'
        BUILD_ID = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
        // JENKINS_NODE_COOKIE = 'dontKillMe' // Jenkins의 ProcessTreeKiller 방지
        // PM2_HOME = '/var/lib/jenkins/.pm2'
    }
    stages {
        stage('Clone Sources') {
          steps {
            echo 'vue3-gallery building the application...'
            echo 'by https://jenkins.sodi9.store/github-webhook/'
            echo 'by https://jenkins.sodi9.store/github-webhook/'
            echo 'by https://jenkins.sodi9.store/github-webhook/'
            // git 'https://gitlab.com/chiminyau/ci-test.git'
          }
        }
        stage('Information') {
          steps {
            echo 'vue3-gallery Information...'
            sh 'node -v'
            sh 'npm -v'
          }
        }
        stage('Config') {
          steps {
            echo 'vue3-gallery Config...  now....'
            // sh 'npm set registry https://registry.npm.taobao.org'
            // sh 'npm set disturl https://npm.taobao.org/dist'
            // sh 'npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver'
            // sh 'npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver'
            // sh 'npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs'
            // sh 'npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents'
            // sh 'npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass'
            // sh 'npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/'
          }
        }
        stage('Dependencies') {
          steps {
            sh 'npm install'
          }
        }
        // stage('Unit Test') {
        //   steps {
        //     sh 'npm run unit'
        //   }
        // }
        // stage('dev') {
        //   steps {
        //     echo 'vue3-gallery dev the application...  now....'
        //     echo 'vue3-gallery build 시 에러나서 임시로 개발로 배포  now....'
        //     // sh 'npm run dev'
        //     sh 'pm2 restart "vue3-gallery" || pm2 start "npm run dev" --name vue3-gallery'
        //   }
        // }
        stage('Build') {
          steps {
            echo 'vue3-gallery building the application...  now.... 에러 나니까 root 경로를 빌드 dist로 바꾸자'
            echo 'vue3-gallery building the application...  now..../var/lib/jenkins/workspace/vue3-gallery/dist '
            sh 'npm run build'
          }
        }


        stage('run') {
          steps {
            echo 'vue3-gallery building the application...  now....'
            // sh 'npm run dev'
            sh 'pm2 restart "vue3-gallery" || pm2 start "npm run preview" --name vue3-gallery'
          }
        } 









        // stage('deploy') {
        //   steps {
        //     echo 'vue3-gallery deploying the application...  dir /var/www/vue3-gallery'
        //     // sh 'cp dist/* /var/www/vue3-gallery'    
        //     // Permission denied
        //     sh 'sudo rm -rf /var/www/vue3-gallery/*'
        //     sh 'sudo cp -rf dist/* /var/www/vue3-gallery'
        //   }
        // }















        // stage('test') {
        //     steps {
        //         echo 'vue3-gallery testing the application...'
        //     }
        // }
        // stage('run') {
        //     steps {
        //         echo 'vue3-gallery run the application... by node 명령  important https://jenkins.sodi9.store/github-webhook/'
        //         echo 'vue3-gallery run the application... by 백그라운드 로 실행해야함'
        //         echo 'vue3-gallery run the application... by node .output/server/index.mjs'
        //         // sh 'node .output/server/index.mjs'
        //         // sh 'export BUILD_ID=dontKillMe'
        //         // sh 'pm2 start .output/server/index.mjs -i max --name "vue3-gallery" -f'// 앱이 이전 꺼도 보임 refresh할때마다 다름
        //         sh ' pm2 restart "vue3-gallery" || pm2 start .output/server/index.mjs -i max --name "vue3-gallery"'
        //         sh 'pm2 save'
        //     }
        // }
    }
}
