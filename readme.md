----------------------------- basic porject setup ------------------------------

-------------------------------- I webpack I -----------------------------------

Initialize npm: npm init -y -> package.json
install webpack:  
 - npm install webpack webpack-cli --save-dev - npm install webpack - npm install --save-dev style-loader css-loader - npm install --save-dev webpack-dev-server - npm install --save-dev html-webpack-plugin
create gitignnore file: touch .gitignnore - node_modules/
create webpack config: touch webpack.config.js - copy template from last project
create src folder: mkdir src - webpack uses the src folder as entry point
create src/index.js: touch index.js
create dist folder: mkdir dist - webpack will create bundle in this folder
create styles.css: touch styles.css - import "./styles.css"; in index.js - reset css file
create src/template.html -> change title
configure package.json
use watch mode: npm run watch
start server: npm run start

---------------------------------- II ESLint and Prettier II -------------------

1. initialize: npm init @eslint/config
   - answer questions
2. create .eslintignore: touch .eslintignore - check last project
3. install prettier
   - npm install --save-dev --save-exact prettier
4. format all files
   - npx prettier --write .
5. Install eslint-config-prettier:
   - npm install --save-dev eslint-config-prettier
   -> .eslintrc.json: 
         "extends": [
         "some-other-config-you-use",
         "prettier"
      ]

------------------------------------ III General III ---------------------------

1. user css reset: https://meyerweb.com/eric/tools/css/reset/
