"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const droneService_1 = __importDefault(require("../services/droneService"));
class DroneController {
    createDrone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputData = req.body;
                const newDrone = yield droneService_1.default.createDrone(inputData);
                res.status(201).send({ data: newDrone, message: 'Drone created successfully' });
            }
            catch (error) {
                console.error('Error creating drone:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });
    }
    getAllDrones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const drones = yield droneService_1.default.getAllDrones();
                res.status(200).send({ data: drones, message: 'Drones fetched successfully' });
            }
            catch (error) {
                console.error('Error fetching drones:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });
    }
    loadMedications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { droneSerialNumber, medicationIds } = req.body;
            try {
                const message = yield droneService_1.default.loadMedications(droneSerialNumber, medicationIds);
                res.status(200).send({ message });
            }
            catch (error) {
                console.error('Error loading medication:', error);
                res.status(500).send({ error: 'Internal Server error' });
            }
        });
    }
    getLoadedMedications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { droneSerialNumber } = req.params;
            try {
                const loadedMedications = yield droneService_1.default.getLoadedMedications(droneSerialNumber);
                res.status(200).send({ data: loadedMedications, message: 'Loaded medications fetched successfully' });
            }
            catch (error) {
                console.error('Error fetching loaded medications:', error);
                res.status(500).send({ error: 'Internal Server error' });
            }
        });
    }
    getAvailableDrones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const availableDrones = yield droneService_1.default.getAvailableDrones();
                res.status(200).send({ data: availableDrones, message: 'Available drones fetched successfully' });
            }
            catch (error) {
                console.error('Error fetching available drones:', error);
                res.status(500).send({ error: 'Internal Server error' });
            }
        });
    }
    getBatteryLevel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { droneSerialNumber } = req.params;
            try {
                const batteryLevel = yield droneService_1.default.getBatteryLevel(droneSerialNumber);
                res.status(200).send({ data: batteryLevel, message: 'Battery level fetched successfully' });
            }
            catch (error) {
                console.error('Error fetching battery level:', error);
                res.status(500).send({ error: 'Internal Server error' });
            }
        });
    }
}
exports.default = new DroneController();
//# sourceMappingURL=droneController.js.map