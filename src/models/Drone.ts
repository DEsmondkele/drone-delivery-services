import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Medication from './Medication';

interface DroneAttributes {
    serialNumber: string;
    model: string;
    weightLimit: number;
    batteryCapacity: number;
    state: string;
    medication: Medication | null;
}

class Drone extends Model<DroneAttributes> implements DroneAttributes {
    public serialNumber!: string;
    public model!: string;
    public weightLimit!: number;
    public batteryCapacity!: number;
    public state!: string;
    medication: Medication | null;
}

Drone.init({
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weightLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    batteryCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medication: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
    sequelize,
    paranoid: true,
    modelName: 'Drone',
});

Drone.hasOne(Medication, {
    foreignKey: 'medicationId',
    as: 'medication',
});

export default Drone;
