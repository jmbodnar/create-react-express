# Notes & To-Dos

## Styling Notes

We use [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/) as our base. We import the bootstrap.css in `/client/src/index.js` and immediately afterwards import `/client/src/index.css`. Default to modifying `index.css` for easily understood global overrids. Use componentent level styles for component-specific overrides.

Beware changing layout in the beginning. I tried to use semantic/meaningful and accessible markup as best as possible, but it's gotten kind of messy. It'll be easier to address layout and styling closer to the end.

## General Development Notes

## Deployment Notes

I don't know how to deploy to Heroku. Help! (JMB)

## To-Dos

### Primary To-Dos

TODO: As a user I can add a recipe to the db

TODO: As a user I can register/login

TODO: As a user I can comment on a recipe

TODO: As a user I can do stuff with the table of recipes (sorting, etc.)—Try implementing with react or we can use data tables...

TODO: Deploy to and test/troubleshoot Heroku

TODO: Address CORS issue or local development. In the short-term, you can (somewhat ill-advisedly) install [Moesif Origins & CORS Changer add on](https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/) for FireFox or the [Chrome version](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc).

### Secondary To-Dos

TODO: As a user I can like a recipe

TODO: As a user I can only view comments and add a recipe and comment on a recipe if I am registered and currently logged in

### Completed To-Dos

