import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import config from '../config/default';
import indexRouter from './index';
import userRouter from './user';
import authRouter from './auth';

const url = `${config.endpoint}:${config.port}`;
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'BE api-guru-app',
      version: '1.0.0',
      description:
        'BE api guru-app',
    },
    servers: [
      {
        url,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },
    security: [{
      jwt: []
    }],
  },
  swagger: "2.0",
  apis: ['./server/routes/*.js']
}
const options = swaggerJSDoc(swaggerOptions);

const routeInit = function (app) {
  app.use('/', indexRouter);
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(options, {
    swaggerOptions: {
      requestInterceptor: function (request) {
        request.headers.Origin = url;
        return request;
      },
      url: `${url}/docs`
    }
  }));
  app.use('/api', authRouter);
  app.use('/api/v1/user', userRouter);
};

module.exports = routeInit;