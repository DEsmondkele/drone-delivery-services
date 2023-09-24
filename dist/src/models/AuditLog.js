"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const DroneModel_1 = __importDefault(require("./DroneModel"));
class AuditLog extends sequelize_1.Model {
    static associate(models) {
        AuditLog.belongsTo(models.Drone, {
            foreignKey: 'droneSerialNumber',
            as: 'auditLogs',
        });
    }
}
AuditLog.init({
    droneSerialNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    batteryLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    timestamp: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: config_1.sequelize,
    modelName: 'AuditLog',
});
AuditLog.belongsTo(DroneModel_1.default, {
    foreignKey: 'droneSerialNumber',
    targetKey: 'serialNumber',
});
exports.default = AuditLog;
//# sourceMappingURL=AuditLog.js.map