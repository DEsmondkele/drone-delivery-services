"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicationController_1 = __importDefault(require("../controllers/medicationController"));
const router = express_1.default.Router();
router.post("/medications", medicationController_1.default.createMedication);
router.get('/medications', medicationController_1.default.getAllMedications);
exports.default = router;
//# sourceMappingURL=medicationRoutes.js.map