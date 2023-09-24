
import { sequelize } from '../config';

import Medication from '../models/Medication';
import Drone from '../models/Drone';
import AuditLog from "../models/AuditLog";

async function initializeDatabase() {
    try {
        await sequelize.sync({ force: true });

        Medication.associate({ Drone });
        Drone.associate({ Medication });
        AuditLog.associate({Drone});

        // TODO initialization logic can go here, e.g., preloading data

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
}

export default initializeDatabase;
