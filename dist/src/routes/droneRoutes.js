"use strict";
// @ts-ignore
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const droneController_1 = __importDefault(require("../controllers/droneController"));
const router = express_1.default.Router();
router.post('/drones/create', droneController_1.default.createDrone);
router.get('/drones', droneController_1.default.getAllDrones);
router.post('/drones/:serialNumber/load', droneController_1.default.loadMedications);
exports.default = router;
/** TODO Implementation of the following routes:
 router.get('/drones/:serialNumber/medications', DroneController.getLoadedMedications);
 router.get('/drones/available', DroneController.getAvailableDrones);
 router.get('/drones/:serialNumber/battery', DroneController.getBatteryLevel);
*/
//# sourceMappingURL=droneRoutes.js.map