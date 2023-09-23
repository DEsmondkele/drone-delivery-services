import Drone, { DroneInput, DroneOutput } from '../models/DroneModel';
import { droneSchema } from '../utils/validation';

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
}

export default new DroneService();

    // TODO other methods for loading, checking, and managing drones

