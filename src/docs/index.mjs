import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "OCKX Express temp",
    description: "OCKX Express temp API documentation",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  schema: ["http", "https"]
};

const outputFile = "./swagger-output.json";
const routes = ["../app.ts"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);