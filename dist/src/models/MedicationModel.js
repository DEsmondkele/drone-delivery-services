"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const DroneModel_1 = __importDefault(require("./DroneModel"));
class Medication extends sequelize_1.Model {
    constructor() {
        super(...arguments);
        this.droneSerialNumber = '';
    }
}
Medication.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    droneSerialNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: config_1.sequelize,
    modelName: 'Medication',
});
Medication.belongsTo(DroneModel_1.default, {
    foreignKey: 'droneSerialNumber',
    targetKey: 'serialNumber',
    as: 'Drone',
});
exports.default = Medication;
//# sourceMappingURL=MedicationModel.js.map