# Tis the Seasoning

A recipe-sharing App that lets registered, logged-in users view, add, and comment on recipes.

View the [project contributions](https://github.com/jmbodnar/create-react-express/graphs/contributors):

View the [project board](https://github.com/jmbodnar/create-react-express/projects/2) for features, user stories, and tasks.

## Technologies Used

- [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/) for the base css
- [npn cors package](https://www.npmjs.com/package/cors) to handle CORS problems
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/), [My JSON Server](https://my-json-server.typicode.com/), and [json-server](https://www.npmjs.com/package/json-server) for early prototyping
- [HTML Details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) for comment disclosure
- [MongoDB]() Database for storing and manipulating data for application
- [ExpressJS]() Allows for creation of Rest API Server and defining routes for the application based on HTTP methods and URLs
- [ReactJS]() Javascript library that presents Component-based approach to User Interface
- [NodeJS]()
- [Axios]()
- [RESTClient]-Allows you to send HTTP request and view the response in Visual Studio Code direct
<hr />

Link to [notes for readme](https://drive.google.com/file/d/0B7lunJ3CJPuMTzNodmRRUUg1dmtpeXNnbzU2Z2sxRXUwMG0w/view)


### Obstacles For Project Scope
- what is the best way to provide authentication and user persistence?
- React… What strategies to use in terms of Components and overall structure? 
- What data needs to be stored? 
- What key:value pairs should be initialized in schemas? 
- How should data be accessed by front end? 
- Heroku Deployment Collaboration… How to join parts of code into one?


### Future Scope of App
Possible future Scope includes:
* User specific profile pages upon login 
* Users having ability to follow/ subscribe to other members’ page or recipes
* Users receiving suggested recipes based on prior searches or likes
* Users having different designations based on # of recipes submitted or types of recipes submitted
* Incorporating more food categories than are currently available








## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
