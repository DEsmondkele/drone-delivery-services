// init.ts
import { sequelize } from '../config';

import Medication from '../models/MedicationModel';
import Drone from '../models/DroneModel';

// Define an initialization function
async function initializeDatabase() {
    try {
        // Sync the models with the database
        await sequelize.sync({ force: true }); // The 'force' option recreates tables (use with caution)

        // Additional initialization logic can go here, e.g., preloading data

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
}

// Export the initialization function
export default initializeDatabase;
