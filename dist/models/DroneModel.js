"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class Drone extends sequelize_1.Model {
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
    // ... other attributes
}, {
    timestamps: true,
    sequelize: config_1.sequelize,
    paranoid: true,
    modelName: 'Drone',
});
exports.default = Drone;
//# sourceMappingURL=DroneModel.js.map