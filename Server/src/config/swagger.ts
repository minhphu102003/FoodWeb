import swaggerJsDoc, { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const PORT = process.env.PORT || 3000
const SERVER_URL = `http://localhost:${PORT}`

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: process.env.SWAGGER_TITLE || 'My API',
      version: process.env.SWAGGER_VERSION || '1.0.0',
      description: process.env.SWAGGER_DESCRIPTION || 'API Documentation'
    },
    servers: [{ url: SERVER_URL }],
    tags: [
      {
        name: 'Auth',
        description: 'Các API liên quan đến xác thực'
      },
      {
        name: 'Users',
        description: 'Các API quản lý người dùng'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ BearerAuth: [] }]
  },
  apis: ['src/routes/*.ts']
}

const swaggerSpec = swaggerJsDoc(options)

export { swaggerSpec, swaggerUi }
