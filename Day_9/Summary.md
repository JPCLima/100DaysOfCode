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

#### EJS
* Install ejs:
  * npm install ejs
* Configure the app to acept ejs:
  * app.set('views engine', 'ejs');
* Create a views file

#### Render the page on the home response
  * res.render('home.ejs')

#### Passing data to template:
  * Create some values on the app.get as const
  * On the render pass the number as object res.render('random.ejs', { rand: number })
  * If the name key is equal to value just need a key res.render('random.ejs', { number })
  * To call for the number we need to call for the key, in this case number
  * Passing the params to template, its the same way as before, parsing value to object inside render

#### EJS Serving Static files
* Include the following: app.use(express.static(path.join(__dirname, 'public')));
* Create a folder Public
* Include the css file in the html file: href="/style.css" (!!important the / )


#### Partials
* Create a folder partials inside views
* Create the partials files like header, footer, nav
* in the HTML include this files <%- include('partials/head.ejs') %>