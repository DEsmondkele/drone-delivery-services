import express from 'express';
import bodyParser from 'body-parser';
import medicationRoutes from './src/routes/medicationRoutes';
import droneRoutes from './src/routes/droneRoutes';
import DroneService from './src/services/droneService';
import initializeDatabase from './src/utils/initdb';

const app = express();
const port = 3000;
const interval = 3600000;

app.use(bodyParser.json());

app.use('/api', medicationRoutes);
app.use('/api', droneRoutes);

initializeDatabase().then(() => {
    console.log('Database initialized with dummy data.');

    app.listen(port, async () => {
        console.log(`Server is running on port ${port}`);
    });
});
const performBatteryCheck = async () => {
    try {
        // Get a list of all drones
        const drones = await DroneService.getAllDrones();
        for (const drone of drones) {
            const batteryLevel = drone.batteryCapacity;
            const droneSerialNumber = drone.serialNumber;

            await DroneService.createAuditLog(droneSerialNumber, batteryLevel);
        }

        console.log('Battery check and audit log creation complete.');
    } catch (error) {
        console.error('Error during battery check and audit log creation:', error);
    }
};

// Scheduling the battery check task to run at a specified interval
setInterval(performBatteryCheck, interval);
