# Property Listing App

A React web application that displays a list of properties using a data set.

#### Functionality

This application display a list of properties using the data set in a form of JSON object which is serve as mock backend data. The data set within the "results" array running down the page in a column that has a heading labeled Results. There is a second column with a heading Saved Properties, along side the Results column. It contains the initial property within the "saved" array.

Hovering over a property card in the Results column displays an "add" button. When clicking the "add" button creates the property in the "Saved Properties" column. Hovering over a property card in the Saved Properties column displays a "remove" button. Clicking the "remove" button will remove the property from the list of saved properties.

## Run Application

### Install dependencies

Clone the repository. Go to the root folder and execute the following command to install the dependencies.

```bash
npm install
```

### Run

This application runs on a CLI. Open a CLI and set the prompt to the root folder. Execute the following command.

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run Unit Test

```bash
npm test
```

Launches the test runner in the interactive watch mode.\

## Build the application

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build for the best performance.

## Implementation

### Files Overview

```
-- public/
-- src/
    -- index.js                     // main entry file
    -- app.js
    -- assets
        -- styles                   // sass variables and mixins
    -- components                   // presentational components
        -- shared                   // common components
            -- app-header
            -- app-footer
        -- property-section         // property section componenets
        -- property-card            // property card components and its elements
            -- card-elements
                -- card-header
                -- card-body
                -- card-footer
                -- card-button
    -- containers                   // container components
        -- properties               // properties components
    -- data                         // contains the data set in a form of JSON object

```
