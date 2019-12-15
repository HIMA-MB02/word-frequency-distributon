# Word Frequency Distribution of top 'N' words from file at https://terriblytinytales.com/test.txt
Application built with Angular 8 as frontend, Express on top of Node.js as backend

Clone and download the application and open the root folder in Visual Studio Code

## /ttt-frontend

This folder contains the frontend of the application built in Angular 8.

To run the frontend:
    Open the terminal with /ttt-frontend as the root folder.
    Run `npm install` to install the required dependencies from package.json.
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
    The app will automatically reload if you change any of the source files.

Components: 
    1. HomeComponent: This is the default component with the search-bar taking number inputs only
    2. ListComponent: This is the component that displays the top 'n' results ('n' entered in the homecomponent) of the frequency distributon of the word count as stated in the problem statement.
    3. AppComponent: This is the root-component of the root-module (AppModule). This contains a constant navbar component, with a router outlet to route between HomeComponent and ListComponent. (Routing details in 'src/app/app-routing.module.ts')

## /ttt-backend

This folder contains the backend of the application built with Express on top of Node.js.
It contains the localhost:3000/ttt/:count routes, defined in 'routes/applciationRoutes.js'
Starting point is in ./app.js in the root directory.

To run the backend:
    Open the terminal with /ttt-backend as the root folder.
    Run `npm install` to install the required dependencies from package.json.
    Run `node app.js` for a dev server. Navigate to `http://localhost:3000/`. (This is the RESTful endpoints to communicate to frontend)
    NOTE: The app will NOT automatically reload if you change any of the source files.

Components:
    1. app.js: This is the entry point for the express application. This contains all the dependencies, middlewares, routes(imported from 'routes/applciationRoutes.js') and initializes the server(at 3000 for development server).
    2. applicationRoutes.js: This contains the routes defined by the backend to handle requests. It contains the  GET: /ttt/:count route, which fetches, orders, maps and sorts the text file at https://terriblytinytales.com/test.txt. 

## Production

The current git repository contains the developement server folder structure. 
For the production server visit: (https://github.com/HIMA-MB02/ttt-assignments).

## Deploment

This application has been deployed on heroku as a MEAN Stack application. 
(https://limitless-hamlet-00283.herokuapp.com)

