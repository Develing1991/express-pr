export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "express-pr",
          version: "1.0.0",
          description:
            "This is a simple CRUD API application made with Express and documented with Swagger",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Develing1991",
            url: "https://github.com/Develing1991",
            email: "completed0728@email.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3000",
          },
        ],
    },
    apis: ['./src/swagger/*.swagger.js'], // files containing annotations as above
};