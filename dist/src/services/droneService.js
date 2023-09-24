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
const DroneModel_1 = __importDefault(require("../models/DroneModel"));
const validation_1 = require("../utils/validation");
const MedicationModel_1 = __importDefault(require("../models/MedicationModel"));
const AuditLog_1 = __importDefault(require("../models/AuditLog"));
class DroneService {
    createDrone(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the input data
            const { error } = validation_1.droneSchema.validate(data);
            if (error) {
                throw new Error(`Validation error: ${error.details.map((d) => d.message).join(', ')}`);
            }
            return yield DroneModel_1.default.create(data);
        });
    }
    getAllDrones() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DroneModel_1.default.findAll();
        });
    }
    loadMedications(droneSerialNumber, medicationIds) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the drone by serial number
                const drone = yield DroneModel_1.default.findOne({
                    where: { serialNumber: droneSerialNumber },
                });
                if (!drone) {
                    throw new Error('Drone not found');
                }
                // Check if the drone's state allows loading (e.g., it's not in LOADING state)
                if (drone.state === 'LOADING') {
                    throw new Error('Drone is already in LOADING state');
                }
                // Calculate the total weight of the medications to be loaded
                const medications = yield MedicationModel_1.default.findAll({
                    where: { id: medicationIds },
                });
                const totalWeight = medications.reduce((acc, medication) => acc + medication.weight, 0);
                // Check if the total weight of medications exceeds the drone's weight limit
                if (totalWeight > drone.weightLimit) {
                    throw new Error('Medication weight exceeds drone weight limit');
                }
                // Update the drone's state to LOADING
                drone.state = 'LOADING';
                yield drone.save();
                // Create records in the database to associate loaded medications with the drone
                yield drone.addMedications(medications);
                return 'Medications loaded successfully';
            }
            catch (error) {
                throw error;
            }
        });
    }
    createAuditLog(droneSerialNumber, batteryLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create an audit log entry
                yield AuditLog_1.default.create({
                    droneSerialNumber,
                    batteryLevel,
                    timestamp: new Date(),
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
    getLoadedMedications(droneSerialNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the drone by serial number
                const drone = yield DroneModel_1.default.findOne({
                    where: { serialNumber: droneSerialNumber },
                    include: [MedicationModel_1.default], // Include associated medications
                });
                if (!drone) {
                    throw new Error('Drone not found');
                }
                // Checking the drone's state allows accessing loaded medications
                if (drone.state !== 'LOADING' && drone.state !== 'LOADED') {
                    throw new Error('Drone is not in LOADING or LOADED state');
                }
                // Retrieve the loaded medications associated with the drone
                const loadedMedications = drone.Medications;
                return loadedMedications;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAvailableDrones() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find drones that are available for loading (state is IDLE)
                const availableDrones = yield DroneModel_1.default.findAll({
                    where: { state: 'IDLE' },
                });
                return availableDrones;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getBatteryLevel(droneSerialNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the drone by serial number
                const drone = yield DroneModel_1.default.findOne({
                    where: { serialNumber: droneSerialNumber },
                });
                if (!drone) {
                    throw new Error('Drone not found');
                }
                // Retrieve the battery level of the drone
                const batteryLevel = drone.batteryCapacity;
                return batteryLevel;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new DroneService();
// TODO other methods for loading, checking, and managing drones
//# sourceMappingURL=droneService.js.map