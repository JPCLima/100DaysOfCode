# Day 6

## Summary: 
* Review Node Paakage Manager
  
### 1. NPM

#### What is NPM?
* Node Package Manager
* Modules are JS libaries

#### Commands:
* Version: npm -v or npm --version
* Help: npm or npm --help
* Create the package: npm init
* Create the package by default: npm init --yes or npm init -y
* Change the default configuration of the package: npm config set init-author-name "João Lima"
* Get the configuration name: npm get init-name-author
* Install a package: npm install lodash --save (save add the module to the dependencies in the package.json)
* In the app require the module using: const _ = require('lodash')
* Run the app in the console: npm index.js or npm index
* Create the devDependicies: npm -i gulp --save-dev
* Uninstall package from dev: npm uninstall gulp-sass --save-dev
* Uninstall package fromdev version remve: npm remove gulp --save-dev
* Install package with specific version: npm install lodash@4.17.3 --save
* Update package: npm update lodash
* Install the module globaly: npm install nodemon -g
* Check where is saved the global modules file: npm root -g
* Remove global files: npm remove nodemon -g
* Get all the dependencies list: npm list
* Get all the dependencies list, level 1: npm list --depth 0


#### What is Package.json Fie?
* Manifest file app info
* Lists dependencies 
* Specify if versions should update
* Create NPM scripts
* Easily create with "npm init"

#### How to install all the dependecies from the clone repo?
* npm install (its adding all the the modules in the dependencies in the package.json)
* Install just the production dependencies: npm install --production

#### Semantic Version - in the package.json
* First number: Major Version - Major changes, breaks API
* Second number: Minor version - new features, does not break API
* Third number: Path - bug fixes 
* ^4.17.4 in the dependencies: when the code is push from the git and installed, the version will be updated until Minor version
* ~4.17.4 in the dependencies: will just update the path version
* 4.17.4 in the dependencies: will install the current version without any update
* '*' in the dependencies install the last version

#### Script in the package.json
* Change the test to "start": "node index.js"
* To run the app use: npm start
* Create a script with live server:
  * Install Live Server as --save-dev
  * in scripts add "server": "live-server"

### 2. Async JS
#### Callbacks
* Passing a function callbacks means that function will wait until all the code above to be completed just after run the callback funtion

#### Promesis 
* Is an object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*  Allows to associate handlers with an asynchronous action's eventual success value or failure reason
*  Handel the erros with then and catch
*  Promise.all to handel mutiple promises

#### Aasync Await
