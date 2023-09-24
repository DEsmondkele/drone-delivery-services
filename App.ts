// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import medicationRoutes from './src/routes/medicationRoutes';
import droneRoutes from './src/routes/droneRoutes';
import initializeDatabase from './src/utils/Initdb'; // Import your database initialization script

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initializing the database before setting up routes
initializeDatabase().then(() => {
    app.use('/api', medicationRoutes);
    app.use('/api', droneRoutes);

    app.listen(port, async () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error initializing the database:', error);
});


