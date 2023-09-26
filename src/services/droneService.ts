import Drone from '../models/DroneModel';
import {droneSchema} from '../utils/validation';
import AuditLog from "../models/AuditLog";
import Medication from "../models/MedicationModel";


class DroneService {
    async createDrone(data: any): Promise<any> {
        // Validate the input data
        const { error } = droneSchema.validate(data);
        if (error) {
            throw new Error(`Validation error: ${error.details.map((d) => d.message).join(', ')}`);
        }

        return await Drone.create(data);
    }

    async getAllDrones(): Promise<any[]> {
        return await Drone.findAll();
    }
    async createAuditLog(droneSerialNumber: string, batteryLevel: number) {
        try {
            // Create an audit log entry
            await AuditLog.create({
                droneSerialNumber,
                batteryLevel,
                timestamp: new Date(),
            });
        } catch (error) {
            throw error;
        }
    }
    async loadMedicationsForDrone(droneSerialNumber: string) {
        try {
            // Find the drone by serial number
            const drone = await Drone.findOne({
                where: { serialNumber: droneSerialNumber },
            });

            if (!drone) {
                throw new Error('Drone not found');
            }

            if (drone.state === 'LOADING') {
                throw new Error('Drone is already in LOADING state');
            }

            const allMedications = await Medication.findAll();

            const selectedMedication = allMedications.find((medication) => {
                const isWeightSuitable = medication.weight < drone.weightLimit;
                const isBatterySuitable = drone.batteryCapacity > 0.25;
                return isWeightSuitable && isBatterySuitable;
            });

            if (!selectedMedication) {
                throw new Error('No suitable medication found for the drone');
            }
            drone.medication = selectedMedication;

            // Update the drone's state to LOADING and save
            drone.state = 'LOADING';
            await drone.save();

            return 'Medication loaded successfully';
        } catch (error) {
            throw error;
        }
    }


    async getLoadedMedications(droneSerialNumber: string) {
        try {
            // Find the drone by serial number
            const drone = await Drone.findOne({
                where: { serialNumber: droneSerialNumber },
                include: [Medication], // Include associated medications
            });

            if (!drone) {
                throw new Error('Drone not found');
            }

            // Checking the drone's state allows accessing loaded medications
            if (drone.state !== 'LOADING' && drone.state !== 'LOADED') {
                throw new Error('Drone is not in LOADING or LOADED state');
            }

            // Retrieve the loaded medications associated with the drone
            const loadedMedications = drone;

            return loadedMedications;
        } catch (error) {            throw error;
        }
    }

    async getAvailableDrones() {
        try {
            // Finding drones that are available for loading (state is IDLE)
            const availableDrones = await Drone.findAll({
                where: { state: 'IDLE' },
            });

            return availableDrones;
        } catch (error) {
            throw error;
        }
    }

    async getBatteryLevel(droneSerialNumber: string) {
        try {
            // Finding the drone by it's serial number
            const drone = await Drone.findOne({
                where: { serialNumber: droneSerialNumber },
            });

            if (!drone) {
                throw new Error('Drone not found');
            }

            // Retrieving the battery level of the drone
            const batteryLevel = drone.batteryCapacity;

            return batteryLevel;
        } catch (error) {
            throw error;
        }
    }
}

export default new DroneService();

    // TODO other methods for loading, checking, and managing drones

