import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config';

interface MedicationAttributes {
    name: string;
    weight: number;
    code: string;
    image: string;
}
export interface MedicationInput extends Optional<MedicationAttributes, 'name'> {}
export interface MedicationOutput extends Required<MedicationAttributes> {}

class Medication extends Model<MedicationAttributes, MedicationInput>implements MedicationAttributes{
    public name!: string;
    public code!: string;
    public weight!: number;
    public image!: string;
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
    },
    {
        sequelize,
        modelName: 'Medication',
    }
);

export default Medication;