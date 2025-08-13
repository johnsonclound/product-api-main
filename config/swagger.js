//config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: `E-commerce API Documentation`,
            version: '1.0.0',
            description: 'API documentation for the E-commerce management',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            example: 'iPhone 15',
                        },
                        price: {
                            type: 'number',
                            format: 'float',
                            example: 37900.00,
                        },
                        deleted: {
                            type: 'boolean',
                            example: false,
                        },
                    },
                },
                ProductInput: {
                    type: 'object',
                    required: ['name', 'price'],
                    properties: {
                        name: {
                            type: 'string',
                            example: 'iPhone 15',
                        },
                        price: {
                            type: 'number',
                            format: 'float',
                            example: 37900.00,
                        },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Product not found',
                        },
                        statusCode: {
                            type: 'integer',
                            example: 404,
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;