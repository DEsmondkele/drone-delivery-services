import Medication, { MedicationInput, MedicationOutput } from '../models/MedicationModel';
import { medicationSchema } from '../utils/validation';

class MedicationService {
    async createMedication(data: MedicationInput): Promise<MedicationOutput> {
        // Validate the input data
        const { error } = medicationSchema.validate(data);
        if (error) {
            throw new Error(`Validation error: ${error.details.map((d) => d.message).join(', ')}`);
        }

        return await Medication.create(data);
    }

    async getAllMedications(): Promise<MedicationOutput[]> {
        return await Medication.findAll();
    }
}

export default new MedicationService();
