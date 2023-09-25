// initdb.ts
import { sequelize } from '../config';
import Medication from '../models/MedicationModel';
import Drone from '../models/DroneModel';
import AuditLog from "../models/AuditLog";

// Define the associations between models
Medication.belongsTo(Drone, {
    foreignKey: 'medicationId',
    as: 'drones',
});

Drone.hasOne(Medication, {
    foreignKey: 'medicationId',
    as: 'medications',
});
Drone.hasOne(AuditLog,{
   foreignKey: 'auditLogId'
});
async function initializeDatabase() {
    try {
        // Sync the models with the database
        await sequelize.sync({ force: true });

        // TODO Additional initialization logic can go here, e.g., preloading data

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
}
export default initializeDatabase;
