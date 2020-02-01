# Tis the Seasoning

A recipe-sharing App that lets registered, logged-in users view, add, and comment on recipes.

View the [project contributions](https://github.com/jmbodnar/create-react-express/graphs/contributors):

View the [project board](https://github.com/jmbodnar/create-react-express/projects/2) for features, user stories, and tasks.

## Technologies Used

- [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/) for the base css
- [npn cors package](https://www.npmjs.com/package/cors) to handle CORS problems
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/), [My JSON Server](https://my-json-server.typicode.com/), and [json-server](https://www.npmjs.com/package/json-server) for early prototyping
- [HTML Details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) for comment disclosure
- [MongoDB]()
- [ExpressJS]()
- [ReactJS]()
- [NodeJS]()
- [axiox]()

<hr />

Link to [notes for readme](https://drive.google.com/file/d/0B7lunJ3CJPuMTzNodmRRUUg1dmtpeXNnbzU2Z2sxRXUwMG0w/view)

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
