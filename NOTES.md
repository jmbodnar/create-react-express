# Notes & To-Dos

Feel free to add notes and to-do items to this file

## Styling Notes

We use [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/) as our base. We import the bootstrap.css in `/client/src/index.js` and immediately afterwards import `/client/src/index.css`. Default to modifying `index.css` for easily understood global overrids. Use componentent level styles for component-specific overrides.

Beware changing layout in the beginning. I tried to use semantic/meaningful and accessible markup as best as possible, but it's gotten kind of messy. It'll be easier to address layout and styling closer to the end.

## General Development Notes

### Front End Work

It all happens in `/client/src`

### Branches & Merging (GitFlow)

Try to use the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) methodology for development. It'll help us keep our wires from getting crossed. Don't worry about the GitFlow tool. Just use the general method. 

Keep `master` as our it-is-really-working-and-good-to-go branch; it's a protectd branch and requires one review.  Create personal development branches off of `develop`. For example, If I'm working on a registration form, I'd create a personal feature branch called `jon/user-form` (or whatever) and work in there. When it feels good to go, I'd merge into develop (after updating my development branch) and test there. If it's all good and done, I'd then to a pull request on master from develop. 

### Seeding the Dev Database

If you install the [REST Client VS Code extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) you can use the `seed.rest` file (`/routes/seed.rest`) to push a user and a recipe to your db.

## Deployment Notes

I don't know how to deploy to Heroku. Help! (JMB)

## To-Dos

### Primary To-Dos

TODO: As a user I can add a recipe to the db

TODO: As a user I can register/login

TODO: As a user I can comment on a recipe

TODO: As a user I can do stuff with the table of recipes (sorting, etc.)—Try implementing with React or we can use data tables... (Maybe do DT and then try a React version? I don't know. Whatever's easier now.)

TODO: Deploy to and test/troubleshoot Heroku

TODO: Address CORS issue or local development. In the short-term, you can (somewhat ill-advisedly) install [Moesif Origins & CORS Changer add on](https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/) for FireFox or the [Chrome version](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc).

### Secondary To-Dos

TODO: As a user I can like a recipe

TODO: As a user I can only view comments and add a recipe and comment on a recipe if I am registered and currently logged in

### Completed To-Dos

