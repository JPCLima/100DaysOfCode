# Day 9

## Summary: 
* Studying how to create a server with express


### 1. Express
#### Initilaize NPM 
* Initialize the npm: npm init -y
* Install express: npm i express

#### Start Server
* Start a server with: app.listen(port, callbackfunction)
* The app.use((req, res) => { ... }) responde for requests

#### Path Patterns
* Get the params of the url: 
  * 1º use the pattern '/r/subreddit'
  * 2º get the parameter inside callback function: req.params

#### Query String
* create a get request with pattern: '/search'
* create a query const: const { q } = req.query
* call the query in the url: http://localhost:3000/search?q=dogs
* to mutiple values use  &:http://localhost:3000/search?q=dogs&color=black

#### Run nodemon
* To run nodemon replace the word node to nodemon -> nodemon index.js
