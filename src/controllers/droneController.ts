import { Request, Response } from 'express';
import DroneService from '../services/droneService';

class DroneController {
    async createDrone(req: Request, res: Response) {
        try {
            const inputData = req.body;
            const newDrone = await DroneService.createDrone(inputData);
            res.status(201).send({ data: newDrone, message: 'Drone created successfully' });
        } catch (error) {
            console.error('Error creating drone:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }

    async getAllDrones(req: Request, res: Response) {
        try {
            const drones = await DroneService.getAllDrones();
            res.status(200).send({ data: drones, message: 'Drones fetched successfully' });
        } catch (error) {
            console.error('Error fetching drones:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
}

export default new DroneController();
