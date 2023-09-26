import { Request, Response } from 'express';
import MedicationService from '../services/medicationService';

class MedicationController {

    async createMedication(req: Request, res: Response) {
        try {
            const inputData = req.body;
            const newMedication = await MedicationService.createMedication(inputData);
            res.status(201).send(newMedication);
        } catch (error) {
            console.error('Error creating medication:', error);
            res.status(500).send({error: 'Internal Server Error'});
        }
    }

    async getAllMedications(req: Request, res: Response) {
        try {
            const medications = await MedicationService.getAllMedications();
             res.status(200).send(medications);
        } catch (error) {
            console.error('Error fetching medications:', error);
            res.status(500).send({error: 'Internal Server Error'});
        }
    }
}


export default new MedicationController();