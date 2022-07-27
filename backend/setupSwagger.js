import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default function setupSwagger(app) {
  const swaggerSpec = swaggerJSDoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hello World",
        version: "1.0.0",
      },
    },
    apis: ["./routes.js"],
  });

  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}