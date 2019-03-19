# REA Group Code Challenge

## Introdaction

-   The Project language is JavaScript and React framework
-   The Project is created by Create-React-App
-   Adopting Mobx framework to manage state
-   Adopting CSS Module
-   Considering the real situation, using lazy loading to load the property information to optimize UE

## Environment

-   Node v10.10.0
-   Mobx v4.7

## Installation

1. Clone the project into local from Github.
2. Run "npm install" to install the libraries automatically.
3. Run "npm start" to start the project.
4. Run "npm test" to start the test.
5. Run "npm test -- --coverage" to check the coverage.

## Structure

```
 ┣ 📂config
 ┃ ┣ 📂jest
 ┃ ┃ ┣ 📜cssTransform.js
 ┃ ┃ ┗ 📜fileTransform.js
 ┃ ┣ 📜env.js
 ┃ ┣ 📜paths.js
 ┃ ┣ 📜webpack.config.js
 ┃ ┗ 📜webpackDevServer.config.js
 ┣ 📂public
 ┃ ┣ 📂test_data
 ┃ ┃ ┗ 📜data.json
 ┃ ┗ 📜index.html
 ┣ 📂scripts
 ┃ ┣ 📜build.js
 ┃ ┣ 📜start.js
 ┃ ┗ 📜test.js
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜home.less
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂Property
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜property.less
 ┃ ┃ ┗ 📂PropertyList
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜propertyList.less
 ┃ ┣ 📂router
 ┃ ┃ ┗ 📜Routers.js
 ┃ ┣ 📂stores
 ┃ ┃ ┣ 📂FormStore
 ┃ ┃ ┃ ┗ 📜FormStore.js
 ┃ ┃ ┗ 📜RootStore.js
 ┃ ┣ 📂test
 ┃ ┃ ┣ 📜App.test.js
 ┃ ┃ ┣ 📜Home.test.js
 ┃ ┃ ┣ 📜PropertyList.test.js
 ┃ ┃ ┗ 📜Router.test.js
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc.yml
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

## Issues

The Logo's hyperlink in the mock data have some problems, couldn't get logo images from the link.

## Change Log

### Testing

-   Add Card Component Test
-   Add Home Component Test
-   Add Router file Test

### Property Component

-   Add Layout
-   Create Component

### Card Component

-   Fix get data bug
-   Add Layout
-   Add and adjust function
-   Create Component

### Home Component

-   Add Layout
-   Create Component

### Store

-   Add function and parameters
-   Create FormStore and RootStore

### Route

-   Create Route

### Create Project

-   Create Project
