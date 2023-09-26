import { sequelize } from '../config';
import Medication from '../models/MedicationModel';
import Drone from '../models/DroneModel';
import AuditLog from '../models/AuditLog';
import { dummyDrones, dummyMedications } from './testData';


Medication.belongsTo(Drone, {
    foreignKey: 'droneSerialNumber',
    as: 'drones',
});

Drone.hasOne(Medication, {
    foreignKey: 'droneSerialNumber',
    as: 'medications',
});

Drone.hasOne(AuditLog, {
    foreignKey: 'auditLogId',
});

async function initializeDatabase() {
    try {

        await sequelize.sync({ force: true });


        for (const droneData of dummyDrones) {
            await Drone.create(droneData);
        }

        for (const medicationData of dummyMedications) {
            await Medication.create(medicationData);
        }

        console.log('Database initialized successfully with dummy data');
    } catch (error) {
        console.error('Error initializing the database:', error);
    }
}

export default initializeDatabase;
