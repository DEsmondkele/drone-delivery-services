import Drone, { DroneInput, DroneOutput } from '../models/DroneModel';
import { droneSchema } from '../utils/validation';
import Medication from '../models/MedicationModel';
import AuditLog from "../models/AuditLog";

class DroneService {
    async createDrone(data: DroneInput): Promise<DroneOutput> {
        // Validate the input data
        const { error } = droneSchema.validate(data);
        if (error) {
            throw new Error(`Validation error: ${error.details.map((d) => d.message).join(', ')}`);
        }

        return await Drone.create(data);
    }

    async getAllDrones(): Promise<DroneOutput[]> {
        return await Drone.findAll();
    }
    async loadMedications(droneSerialNumber: string, medicationIds: Array<number>) {
        try {
            // Find the drone by serial number
            const drone = await Drone.findOne({
                where: { serialNumber: droneSerialNumber },
            });

            if (!drone) {
                throw new Error('Drone not found');
            }

            // Check if the drone's state allows loading (e.g., it's not in LOADING state)
            if (drone.state === 'LOADING') {
                throw new Error('Drone is already in LOADING state');
            }

            // Calculate the total weight of the medications to be loaded
            const medications = await Medication.findAll({
                where: { id: medicationIds },
            });

            const totalWeight = medications.reduce((acc, medication) => acc + medication.weight, 0);

            // Check if the total weight of medications exceeds the drone's weight limit
            if (totalWeight > drone.weightLimit) {
                throw new Error('Medication weight exceeds drone weight limit');
            }

            // Update the drone's state to LOADING
            drone.state = 'LOADING';
            await drone.save();

            // Create records in the database to associate loaded medications with the drone
            await drone.addMedications(medications);

            return 'Medications loaded successfully';
        } catch (error) {
            throw error;
        }
    }


}

export default new DroneService();

    // TODO other methods for loading, checking, and managing drones

