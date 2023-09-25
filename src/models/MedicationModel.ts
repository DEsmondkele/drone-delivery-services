import { DataTypes, Model } from 'sequelize';
import Drone from "./DroneModel";
import { sequelize } from '../config';

class Medication extends Model {
    // Define your Medication model attributes here
    public id!: number;
    public name!: string;
    public weight!: number;
    public code!: string;
    public image!: string;

    // You can also define associations here if needed

    // ...

    // Initialize the Medication model
    static initModel(sequelize: any) {
        Medication.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
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
    }
}

Medication.initModel(sequelize);



export default Medication;