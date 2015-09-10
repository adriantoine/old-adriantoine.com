# Bill unattended test

Answer to the test from: https://github.com/nowarkdev/bill-unattended-test

# Instructions

## Try the application

The application is deployed on Heroku, here is the link: https://bill-unattended-test.herokuapp.com/

## Install dependencies

First you need node and npm installed, then, all you need to do is to run:

`npm install`

## Run the application in development mode

You can run the application in development mode, using [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html) with the command:

`npm run dev`

Then open a browser to http://localhost:8080

## Run the application in production mode

You can run the application in production mode with the command (which is the command launched on Heroku):

`npm start`

Then open a browser to http://localhost:3000

# Technology stack

- [React](http://facebook.github.io/react/) to generate markup (Flux wasn't needed since there is no interaction on the page)
- [Webpack](https://webpack.github.io/) to compile Javascript and CSS code with sourcemaps
- [postcss](https://github.com/postcss/postcss) to post process CSS code with these plugins:
    - [postcss-import](https://github.com/postcss/postcss-import) to import files in CSS
    - [postcss-nested](https://github.com/postcss/postcss-nested) to nest CSS rules
    - [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) to use variables in CSS
    - [postcss-extend](https://github.com/travco/postcss-extend) to extend CSS rules
    - [cssnano](http://cssnano.co/) to optimize CSS files
    - [autoprefixer](https://github.com/postcss/autoprefixer) to add browser prefixes
- [Babel](https://babeljs.io/) to use ES6 syntax and compile React files
- [eslint](http://eslint.org/) to lint ES6 code using React
- [Express](http://expressjs.com/) to serve static files
- [fetch](https://github.com/github/fetch), Github Fetch polyfill, lightweight solution to load data with ajax
