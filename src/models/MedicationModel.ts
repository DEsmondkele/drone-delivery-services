import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config';
import Drone from "./DroneModel";

interface MedicationAttributes {
    name: string;
    weight: number;
    code: string;
    image: string;
    droneSerialNumber: string;
}
export interface MedicationInput extends Optional<MedicationAttributes, 'name'> {}
export interface MedicationOutput extends Required<MedicationAttributes> {}

class Medication extends Model<MedicationAttributes, MedicationInput>implements MedicationAttributes{
    public name!: string;
    public code!: string;
    public weight!: number;
    public image!: string;
    droneSerialNumber?: string = '';

    public readonly Drone?: Drone;

}

Medication.init(
    {
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
        droneSerialNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Medication',
    }
);
Medication.belongsTo(Drone, {
    foreignKey: 'droneSerialNumber',
    targetKey: 'serialNumber',
    as: 'Drone',
});

export default Medication;