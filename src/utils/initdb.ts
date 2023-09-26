import { sequelize } from '../config';
import Medication from '../models/MedicationModel';
import Drone from '../models/DroneModel';
import AuditLog from '../models/AuditLog';
import { dummyDrones, dummyMedications } from './testData'; // Import the dummy data

// Defining the associations between models
Medication.belongsTo(Drone, {
    foreignKey: 'medicationId',
    as: 'drones',
});

Drone.hasOne(Medication, {
    foreignKey: 'medicationId',
    as: 'medications',
});

Drone.hasOne(AuditLog, {
    foreignKey: 'auditLogId',
});

async function initializeDatabase() {
    try {
        // Sync the models with the database
        await sequelize.sync({ force: true });

        // Insert dummy data for Drones
        for (const droneData of dummyDrones) {
            await Drone.create(droneData);
        }

        // Insert dummy data for Medications
        for (const medicationData of dummyMedications) {
            await Medication.create(medicationData);
        }

        console.log('Database initialized successfully with dummy data');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
}

export default initializeDatabase;
