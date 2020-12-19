# Day 6

### Summary: 
* Review Node Paakage Manager
  

### What is NPM?
* Node Package Manager
* Modules are JS libaries

### Commands
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


### What is Package.json Fie
* Manifest file app info
* Lists dependencies 
* Specify if versions should update
* Create NPM scripts
* Easily create with "npm init"

### How to install all the dependecies from the clone repo
* npm install (its adding all the the modules in the dependencies in the package.json)