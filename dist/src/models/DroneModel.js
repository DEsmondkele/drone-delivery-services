"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const AuditLog_1 = __importDefault(require("./AuditLog"));
class Drone extends sequelize_1.Model {
    static associate(models) {
        Drone.hasOne(AuditLog_1.default, {
            foreignKey: 'droneSerialNumber',
            as: 'auditLogs',
        });
        Drone.belongsToMany(models.Medication, {
            through: 'DroneMedication',
            foreignKey: 'droneSerialNumber',
            as: 'medications',
        });
    }
}
Drone.init({
    serialNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    weightLimit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    batteryCapacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: config_1.sequelize,
    paranoid: true,
    modelName: 'Drone',
});
exports.default = Drone;
//# sourceMappingURL=DroneModel.js.map