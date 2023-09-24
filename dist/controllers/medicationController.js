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
const medicationService_1 = __importDefault(require("../services/medicationService"));
class MedicationController {
    createMedication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inputData = req.body;
                const newMedication = yield medicationService_1.default.createMedication(inputData);
                res.status(201).send(newMedication);
            }
            catch (error) {
                console.error('Error creating medication:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });
    }
    // TODO Implement other methods for managing medications
    getAllMedications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medications = yield medicationService_1.default.getAllMedications();
                res.status(200).send(medications);
            }
            catch (error) {
                console.error('Error fetching medications:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.default = new MedicationController();
//# sourceMappingURL=medicationController.js.map