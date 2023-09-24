import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Drone from './Drone';

interface MedicationAttributes {
    name: string;
    weight: number;
    code: string;
    image: string;
}

class Medication extends Model<MedicationAttributes> implements MedicationAttributes {
    public name!: string;
    public code!: string;
    public weight!: number;
    public image!: string;
}

Medication.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'Medication',
});

Medication.belongsTo(Drone, {
    foreignKey: 'droneId',
    as: 'drones',
});

export default Medication;
