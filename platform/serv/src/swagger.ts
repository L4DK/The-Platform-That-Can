import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("The Platform")
  .setDescription(
    "The Bouncer-AI Controlled Creativity Wonderland\nCongratulations! You have stumbled upon the promised land of ideas - The Platform.\n\nI've always believed that creativity should never be held back by the constant need to clean up digital clutter.\nThat's why I built The Platform. It's a bustling space for ideas and their offspring,\nwrapped in an AI-controlled environment that's as clean as a freshly starched shirt.\n\nIt's essentially the sanctum where I can continue my customary chaotic creativity, while an army of diligent AI agents (think of them as charming, dutiful butlers) ensure that all the ensuing mess is taken care of. The main AI is the Bouncer, a robust system tasked with keeping the order intact while I dive headfirst into the sea of my ideas.\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username \"admin\" and password \"admin\".\nLearn more in [our docs](https://docs.amplication.com)"
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "The Platform",
};
