import { signIn, signUp, authState } from './user.sweeger.js'

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Firebase Auth API",
        version: "1.0.0",
        description: "Auth System",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
    tags: [
        {
            name: 'Auth'
        }
    ],
    paths: {
        "/auth/signIn": {
            "post": signIn,
        },
        "/auth/signUp": {
            "post": signUp,
        },
        "/auth/authState": {
            "get": authState,
        }
    }
};

export default swaggerDocument