"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class Medication extends sequelize_1.Model {
    static associate(models) {
        Medication.belongsToMany(models.Drone, {
            through: 'DroneMedication',
            foreignKey: 'medicationId',
            as: 'drones',
        });
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
}, {
    sequelize: config_1.sequelize,
    modelName: 'Medication',
});
exports.default = Medication;
//# sourceMappingURL=MedicationModel.js.map