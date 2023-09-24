"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicationSchema = exports.droneSchema = void 0;
// validation.ts
const joi_1 = __importDefault(require("joi"));
// Define validation schemas for request bodies
const droneSchema = joi_1.default.object({
    serialNumber: joi_1.default.string().max(100).required(),
    model: joi_1.default.string().valid('Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight').required(),
    weightLimit: joi_1.default.number().max(500).required(),
    batteryCapacity: joi_1.default.number().required(),
    state: joi_1.default.string().valid('IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING').required(),
});
exports.droneSchema = droneSchema;
const medicationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    weight: joi_1.default.number().required(),
    code: joi_1.default.string().regex(/^[A-Z0-9_]+$/).required(),
    image: joi_1.default.string().required(),
});
exports.medicationSchema = medicationSchema;
//# sourceMappingURL=validation.js.map