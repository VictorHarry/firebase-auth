import dotenv from 'dotenv'
import express from 'express'
import firebase from './firebase.js'
import { authRouter } from './routes/auth.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swegger/index.js';

dotenv.config()

const app = express();
const port = 3000;

firebase(app);
app.use(express.json());
app.use('/auth', authRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Firebase listening at http://localhost:${port} 🔥`);
});