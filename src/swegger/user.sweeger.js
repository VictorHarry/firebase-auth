const signIn = {
    tags: ['Auth'],
    description: "User Sign In",
    operationId: 'signIn',
    security: [
        {
            bearerAuth: []
        }
    ],
    requestBody: {
        description: "User Credentials",
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: 'string',
                            description: 'User email'
                        },
                        password: {
                            type: 'string',
                            description: 'User password'
                        }
                    },
                    required: [
                        'email',
                        'password'
                    ]
                }
            }
        }
    },
    responses: {
        "200": {
            description: "Response from Sign In",
        }
    }
}

const signUp = {
    tags: ['Auth'],
    description: "User Sign Up",
    operationId: 'signUp',
    security: [
        {
            bearerAuth: []
        }
    ],
    requestBody: {
        description: "User Credentials",
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: 'string',
                            description: 'User email'
                        },
                        password: {
                            type: 'string',
                            description: 'User password'
                        }
                    },
                    required: [
                        'email',
                        'password'
                    ]
                }
            }
        }
    },
    responses: {
        "200": {
            description: "Response from Sign Up",
        }
    }
}

const authState = {
    tags: ['Auth'],
    description: "User Sign Up",
    operationId: 'authState',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
            description: "Response from Sign Up",
            content: {
                "application/json": {
                    schema: {
                        type: "boolean",
                    }
                }
            }
        }
    }
}
export { signIn, signUp, authState }