# Snapshot report for `test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://ava.li).

## hello-world

> Snapshot 1

    {
      components: {
        securitySchemes: {
          apiKey: {
            description: 'Optional API key for authenticated access.',
            in: 'header',
            name: 'Authorization',
            type: 'apiKey',
          },
        },
      },
      info: {
        title: 'hello-world',
        version: '1',
      },
      openapi: '3.0.2',
      paths: {
        '/': {
          post: {
            operationId: 'index',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    additionalProperties: false,
                    properties: {
                      name: {
                        default: 'World',
                        type: 'string',
                      },
                    },
                    required: [
                      'name',
                    ],
                    type: 'object',
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    schema: {
                      additionalProperties: false,
                      properties: {
                        result: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                  },
                },
                description: 'Success',
              },
            },
            summary: 'index',
          },
        },
      },
      security: [
        {
          apiKey: [],
        },
      ],
      servers: [
        {
          url: 'https://api.functional-income.com/1/call/hello-world_360e148006098c95',
        },
      ],
    }

## imagemin

> Snapshot 1

    {
      components: {
        securitySchemes: {
          apiKey: {
            description: 'Optional API key for authenticated access.',
            in: 'header',
            name: 'Authorization',
            type: 'apiKey',
          },
        },
      },
      info: {
        title: 'imagemin',
        version: '1',
      },
      openapi: '3.0.2',
      paths: {
        '/': {
          post: {
            operationId: 'optimizeImage',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    additionalProperties: false,
                    properties: {
                      image: {
                        type: 'string',
                      },
                    },
                    required: [
                      'image',
                    ],
                    type: 'object',
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    schema: {
                      additionalProperties: false,
                      properties: {
                        result: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                  },
                },
                description: 'Success',
              },
            },
            summary: 'optimizeImage',
          },
        },
      },
      security: [
        {
          apiKey: [],
        },
      ],
      servers: [
        {
          url: 'https://api.functional-income.com/1/call/imagemin_516db71baeb64417',
        },
      ],
    }

## puppeteer-example

> Snapshot 1

    {
      components: {
        securitySchemes: {
          apiKey: {
            description: 'Optional API key for authenticated access.',
            in: 'header',
            name: 'Authorization',
            type: 'apiKey',
          },
        },
      },
      info: {
        title: 'puppeteer-example',
        version: '1',
      },
      openapi: '3.0.2',
      paths: {
        '/': {
          post: {
            operationId: 'getScreenshot',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    additionalProperties: false,
                    properties: {
                      type: {
                        default: 'png',
                        enum: [
                          'jpg',
                          'png',
                        ],
                        type: 'string',
                      },
                      url: {
                        type: 'string',
                      },
                    },
                    required: [
                      'type',
                      'url',
                    ],
                    type: 'object',
                  },
                },
              },
              required: true,
            },
            responses: {
              200: {
                content: {
                  'application/json': {
                    schema: {
                      additionalProperties: false,
                      properties: {
                        result: {
                          type: 'string',
                        },
                      },
                      type: 'object',
                    },
                  },
                },
                description: 'Success',
              },
            },
            summary: 'getScreenshot',
          },
        },
      },
      security: [
        {
          apiKey: [],
        },
      ],
      servers: [
        {
          url: 'https://api.functional-income.com/1/call/puppeteer-example_c204408318ac4c1b',
        },
      ],
    }