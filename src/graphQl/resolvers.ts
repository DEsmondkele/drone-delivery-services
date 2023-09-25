import DroneService from '../services/droneService'; // Update the import path
import MedicationService from '../services/medicationService';

const resolvers = {
    Query: {
        drones: async () => {
            try {
                return await DroneService.getAllDrones();
            } catch (error) {
                throw new Error(`Error fetching drones:`);
            }
        },
        medications: async () => {
            try {
                return await MedicationService.getAllMedications();
            } catch (error) {
                throw new Error(`Error fetching medications:`);
            }
        },

        loadedMedications: async (droneSerialNumber: string) => {
            try {
                return await DroneService.getLoadedMedications(droneSerialNumber);
            } catch (error) {
                throw new Error(`Error fetching loaded medications:`);
            }
        },
        availableDrones: async () => {
            try {
                return await DroneService.getAvailableDrones();
            } catch (error) {
                throw new Error(`Error fetching available drones: `);
            }
        },
        batteryLevel: async ( droneSerialNumber: any ) => {
            try {
                return await DroneService.getBatteryLevel(droneSerialNumber);
            } catch (error) {
                throw new Error(`Error fetching battery level`);
            }
        },
    },

    Mutation: {
        createDrone: async (input:any) => {
            try {
                return await DroneService.createDrone(input);
            } catch (error) {
                throw new Error(`Error creating audit log: `);
            }
        },
        createMedication: async (input:any) => {
            try {
                return await MedicationService.createMedication(input);
            } catch (error) {
                throw new Error(`Error creating medication: `);
            }
        },

        createAuditLog: async (input: string,battery:number) => {
            try {
                return await DroneService.createAuditLog(input, battery);
            } catch (error) {
                throw new Error(`Error creating audit log: `);
            }
        },

    },
};

export default resolvers;
