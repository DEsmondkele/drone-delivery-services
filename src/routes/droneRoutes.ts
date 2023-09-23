import express from 'express';
import DroneController from '../controllers/droneController';

const router = express.IRouter();

router.post('/drones', DroneController.createDrone);
router.get('/drones', DroneController.getAllDrones);

export default router;
