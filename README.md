# MovieHub 🎬


Welcome to the MovieHub project, an application to keep track of the movies you are watching. This project is designed to help you learn and practice your backend development skills. Throughout the project, you will be adding functionalities and refactoring your code as you learn new concepts.


![General Page](/public/assets/1.png)
![Movie Page](/public/assets/2.png)

## Project Description

MovieHub is an application that allows you to manage a list of movies. Each movie in the application has a name, a image, a score, and a genre. You will be able to perform CRUD (Create, Read, Update, Delete) operations on these movies.

The frontend of the application is built with Next React + Typescript. 
You can check it at https://github.com/franpalberca/moviehub-nextjs

In the user interface, you will be able to view all added movies in a list. Each movie will be displayed with its title, image, score, country and genre. There will be an option to add new movies through a modal, where you can enter the movie's name, upload a poster image, assign a score, and select a genre. You will also have the option to update the data of existing movies or remove them from the list.

- The Backend of the application is built with Node + Mongoose + TypeScript + MongoDB + Prisma + Cloudinary. 

Although the frontend of the application is important for user interaction, the main focus of this project is the backend. As you progress through the project, you will learn and apply different backend technologies and concepts, including Node.js, Express, MongoDB, Prisma, Auth0 and Cloudinary. You will learn how these technologies work together to support the functionalities of the application and provide a smooth user experience.

`#react` `#express` `#nextjs 13` `#node` `#typescript` `#prisma` `#cloudinary`  `#backend` `#assembler-institute-of-technology` `#master-in-software-engineering` 

## Requirements

- Install Node.js and npm on your local machine, and Code Editor like Visual Code .
1. **NODE**: https://nodejs.org/es/download
2. **NPM**:  https://www.npmjs.com/package/npm
3. **Visual Code**: https://code.visualstudio.com/download

- Have basic knowledge of JavaScript and TypeScript.
- Familiarity with the MVC design pattern.
- Basic knowledge of MongoDB and Mongoose.
- Familiarity with Prisma.
- Basic knowledge of MongoDB.
- Understanding of one-to-many and many-to-many relationships.
- Familiarity with Auth0.
- Basic knowledge of Express middleware.
- Familiarity with Cloudinary.
- Basic knowledge of file handling in Node.js.


## Installation

To get the MovieHub project up and running on your local machine, follow these steps:

Clone the repository from GitHub:


```bash
git clone https://github.com/franpalberca/moviehub-nextjs
```

```bash
cd MovieHub
```
```bash
cd client 
```
Install the project dependencies:

```bash
npm install
```
or 
```bash
npm i
```
or 
```bash
pnpm install
```
or 
```bash
yarn install
```

and you must install the backend dependencies: 
```bash
git clone https://github.com/franpalberca/moviehub_backend
git checkout nextjs

```bash
cd server
```
```bash
npm install
```
or 
```bash
npm i
```

## Setting up Environment Variables

Both the client and server applications of Moviehub rely on environment variables stored in .env files for configuration. Before you start using the app, make sure to create a .env file in the root directory of each component (client and server) and provide the necessary values.

### Client Environment Variables

In the client directory, create a .env file with the following variables:

```bash
#endpoints
GENERAL_SERVER_URL=yourPort 
NEXT_PUBLIC_API_USERS=http://localhost:8080/users
NEXT_PUBLIC_API_MOVIES=http://localhost:8080/movies
NEXT_PUBLIC_API_GENRES=http://localhost:8080/genres
#/64f6e1b7763aca904a7e0b41

#auth0
AUTH0_SECRET=yourSecretAuth0Code
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://yourAuth0Issuer.us.auth0.com/
AUTH0_CLIENT_ID=yourClientId
AUTH0_CLIENT_SECRET=yourClientSecret
```

Replace the placeholder values with your specific configuration details.

### Server Environment Variables

In the server directory, create a .env file with the following variables:

```bash
PORT=YourPORT
MONGO_DB_URI=mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase
MONGO_CLUSTER_URI=mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase
APP_ORIGIN=http://yourLocalHost
AUTH0_AUDIENCE=http://yourLocalHost
AUTH0_ISSUER=https://yourAuth0Issuer.us.auth0.com/
CLOUDINARY_NAME=yourCloudinaryName
CLOUDINARY_API_KEY=yourCloudinaryApiKey
CLOUDINARY_API_SECRET=yourCloudinaryApiSecret
```

Again, ensure that you replace the placeholder values with your specific configuration details.

These environment variables are crucial for the proper functioning of the Moviehub app. Make sure to keep your actual sensitive information secure and never share it in your code repository. Users who clone your repository will need to create their own .env files with their unique values for the app to work correctly.

## How to use




```bash
npm run test
```

test: This script is used to run automated tests. In this case, it seems that no specific tests have been specified, and instead, it displays an error message and exits the process with an exit code of 1. You can add your automated tests here if you have any.

```bash
npm run dev
```
dev: This script is for local development. It uses nodemon to watch the .ts files in the src folder and restarts the server whenever it detects changes. ts-node executes the index.ts file, which means your application runs in development mode with TypeScript. To run this script, simply type npm run dev in your terminal.

```bash
npm run build
```

build: This script is responsible for compiling your TypeScript code into JavaScript. It uses rimraf to delete the dist folder (if it exists) and then uses tsc (TypeScript Compiler) to compile the TypeScript files in the src folder and generate the dist folder with the compiled JavaScript files. You can execute this script using npm run build.

```bash
npm run start
```

start: This script first runs the npm run build command, which compiles the TypeScript files into JavaScript in the dist folder. Then, it executes the index.js file located in the dist folder using node. In short, this script starts your application in production mode. To run this script, simply type npm start in your terminal.

Remember that to be able to run these scripts, you need to be in the directory of your project and have Node.js installed. Then, simply type the corresponding command in your terminal to execute each script according to your needs. For example, npm run dev for development mode or npm start for production mode.

## Dependencies

The MovieHub project utilizes several libraries and technologies. Below are the main dependencies used in the project:


### Frontend Dependencies:

React: A popular JavaScript library for building user interfaces.
Next JS 13:A popular open-source JavaScript framework that is primarily used for building fast and efficient web SSR applications.
Auth0 React SDK: An SDK that integrates Auth0 authentication into the React application.
React Router: A library for handling routing within the React application.


### Backend Dependencies:

Express: A fast and minimal web application framework for Node.js.
Prisma: An ORM used for database access and migration.
Auth0 Express Middleware: Middleware for Express to handle Auth0 authentication.
Cloudinary: A cloud-based service for storing and transforming media content.


#### Database:

MongoDB: A NoSQL database used to store movie data (prior to PostgreSQL migration).

#### Dev Dependencies:

TypeScript: A typed superset of JavaScript used to add type safety.
Nodemon: A utility that automatically restarts the Node.js server on file changes (for development).
ESLint: A tool for identifying and reporting on patterns found in JavaScript code.
Prettier: A code formatter used to enforce code style consistency.

## Social Media 


You can find me on LinkedIn, Facebook, and view my other projects on GitHub using the following links:

1. **LinkedIn**: https://www.linkedin.com/in/fran-p-alberca/
2. **GitHub**: https://github.com/franpalberca


## Support Resources


- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Auth0](https://auth0.com/)
- [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [Next JS](https://nextjs.org/blog/next-13)



Remember, the goal of this project is to learn and practice. Don't hesitate to ask for help if you get stuck.
Good luck!