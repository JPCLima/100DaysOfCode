# Day 16

## Summary:
* Continue the TODO app using the ejs

### PATCH 
* Install methodoverride
* Require the methodoverride
* Use the method override, app.use(methodOverride('_method'))
* Include the method on the action, action="/tasks/<%= task_details.id %>/_method=PATCH"
* But the method must to be POST in HTML