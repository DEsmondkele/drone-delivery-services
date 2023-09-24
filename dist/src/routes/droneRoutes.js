"use strict";
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
router.get('/drones/:serialNumber/medications', droneController_1.default.getLoadedMedications);
router.get('/drones/available', droneController_1.default.getAvailableDrones);
router.get('/drones/:serialNumber/battery', droneController_1.default.getBatteryLevel);
exports.default = router;
//# sourceMappingURL=droneRoutes.js.map