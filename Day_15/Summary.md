# Day 15

## Summary
* RESTful app

### Requests
* GET request is going to the url (app.get(url, function))
* POST request is going to the req.body (app.post(url, function))
* Then name in the HTML form are used to parse into the req.body
* To get the request body submited on the post request use, re.body


### REST
* REST stands for Representational State Transfer
* Its a guideline for how clients and servers should communicate and perform
* CRUD, Create Read, Update and Delete

### Structure of CRUD
GET /comments : list of all the comments
POST /comments : create of all the comments
GET /comments:id : get one comment (using ID)
PATCH /comments:id : update one comment (using ID)
DELETE /comments:id : delete one comment (using ID)



