import express  from 'express';
import MedicationController from '../controllers/medicationController';

const router = express.Router();

router.post("/medications", MedicationController.createMedication);
router.get('/medications', MedicationController.getAllMedications);

export default router;