// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import medicationRoutes from './routes/medicationRoutes';
import droneRoutes from './routes/droneRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', medicationRoutes); // Prefix with '/api/medications'
app.use('/api', droneRoutes); // Prefix with '/api/drones'

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});

