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
const config_1 = require("../config");
const MedicationModel_1 = __importDefault(require("../models/MedicationModel"));
const DroneModel_1 = __importDefault(require("../models/DroneModel"));
const AuditLog_1 = __importDefault(require("../models/AuditLog"));
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield config_1.sequelize.sync({ force: true });
            MedicationModel_1.default.associate({ Drone: DroneModel_1.default });
            DroneModel_1.default.associate({ Medication: MedicationModel_1.default });
            AuditLog_1.default.associate({ Drone: DroneModel_1.default });
            // TODO initialization logic can go here, e.g., preloading data
            console.log('Database initialized successfully');
        }
        catch (error) {
            console.error('Error initializing the database:', error);
        }
    });
}
exports.default = initializeDatabase;
//# sourceMappingURL=Initdb.js.map