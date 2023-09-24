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
    loadMedicationsForDrone(droneSerialNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the drone by serial number
                const drone = yield DroneModel_1.default.findOne({
                    where: { serialNumber: droneSerialNumber },
                });
                if (!drone) {
                    throw new Error('Drone not found');
                }
                // Check the drone state
                if (drone.state === 'LOADING') {
                    throw new Error('Drone is already in LOADING state');
                }
                // Fetching all available medications
                const allMedications = yield MedicationModel_1.default.findAll();
                const selectedMedications = allMedications.filter((medication) => {
                    // Check if the medication's weight is less than the drone's weight
                    const isWeightSuitable = medication.weight < drone.weightLimit;
                    // Check if the drone's battery level is greater than 25%
                    const isBatterySuitable = drone.batteryCapacity > 0.25;
                    return isWeightSuitable && isBatterySuitable;
                });
                if (selectedMedications.length === 0) {
                    throw new Error('No suitable medications found for the drone');
                }
                // Update the drone's state to LOADING and save
                drone.state = 'LOADING';
                yield drone.save();
                // Associate selected medications with the drone
                yield drone.set('medications', selectedMedications);
                return 'Medications loaded successfully';
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