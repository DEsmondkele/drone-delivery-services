import express from 'express';
import DroneController from '../controllers/droneController';

const router = express.Router();

router.post('/drones/create', DroneController.createDrone);
router.get('/drones/get', DroneController.getAllDrones);
router.post('/drones/:serialNumber/load', DroneController.loadMedications);
router.get('/drones/:serialNumber/medications', DroneController.getLoadedMedications);
router.get('/drones/available', DroneController.getAvailableDrones);
router.get('/drones/:serialNumber/battery', DroneController.getBatteryLevel);

export default router;
