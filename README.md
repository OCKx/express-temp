# Express-Temp

Express-Temp is a boilerplate template for building scalable and efficient RESTful APIs using **Express.js**, **Prisma**, and **SQLite**. It includes useful tools like Swagger for API documentation and follows a modular design.

## Features

- **Express.js** for the API framework.
- **Prisma ORM** for database management with SQLite by default.
- **JWT Authentication** using `jsonwebtoken`.
- **Validation** using `joi`.
- **Modular structure** for scalability.
- **Swagger** for auto-generated API documentation.
- **Environment variable support** via `dotenv`.

## Table of Contents

- [Express-Temp](#express-temp)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development](#development)
    - [Production](#production)
  - [API Documentation](#api-documentation)
  - [Scripts](#scripts)
  - [Folder Structure](#folder-structure)
  - [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ockx/express-temp.git
   cd express-temp

2. Install dependencies:
    ```bash
    npm install

3. Set up the database:
    ```bash
    npx prisma migrate dev --name init

4. Generate Prisma client:
    ```bash
    npx prisma generate

## Usage
### Development

1. To start the a
    ```bash
    npm run dev

### Production

1. Build the app:
    ```bash
    npm run build

2. Start the built app:
    ```bash
    npm run start:dist

## API Documentation

1. Swagger documentation is available at:
    ```bash
    http://localhost:3000/api-docs
    
2. To regenerate Swagger documentation:
    ```bash
    npm run swagger

## Scripts
    ```bash
npm run dev: Start the app in development mode.
npm run start: Start the app using ts-node.
npm run build: Build the app for production.
npm run start:dist: Start the app from the dist folder.
npm run swagger: Generate Swagger documentation.
npm run typecheck: Type-check the project using TypeScript
    ```

## Folder Structure

├── prisma/
│   ├── schema.prisma         # Prisma schema file
├── src/
│   ├── docs/                 # Swagger setup and documentation
│   ├── features/             # Feature modules
│   │   ├── welcome/          # Example welcome module
│   │   ├── users/            # User module
│   ├── index.ts              # Entry point
│   ├── app.ts                # 
│   ├── router.ts             # Central router
├── .env                      # Environment variables
├── package.json              # Project metadata and scripts
├── README.md                 # Documentation

## License

This project is licensed under the MIT License. See the LICENSE file for details.



Enjoy building your API with Express-Temp! Contributions and suggestions are welcome. 🎉