import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config';

interface DroneAttributes {
    serialNumber: string;
    model: string;
    weightLimit: number;
    batteryCapacity: number;
    state: string;
}
export interface DroneInput extends Optional<DroneAttributes, 'serialNumber' | 'state'> {}
export interface DroneOutput extends Required<DroneAttributes> {}

class Drone extends Model<DroneAttributes, DroneInput> implements DroneAttributes {
    public serialNumber!: string;
    public model!: string;
    public weightLimit!: number;
    public batteryCapacity!: number;
    public state!: string;
}

Drone.init(
    {
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
        // ... other attributes
    },
    {
        timestamps: true,
        sequelize,
        paranoid: true, // If you want soft deletes
        modelName: 'Drone',
    }
);

export default Drone;
