import express from 'express';
import cors from 'cors';

import config from './config.js';
import productRoute from './routes/productRoute.js';
import authRoute from './routes/authRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', productRoute);
app.use('/auth', authRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
