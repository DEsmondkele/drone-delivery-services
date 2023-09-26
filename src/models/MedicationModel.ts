import { DataTypes, Model } from 'sequelize';
import Drone from "./DroneModel";
import { sequelize } from '../config';

class Medication extends Model {
    public id!: number;
    public name!: string;
    public weight!: number;
    public code!: string;
    public image!: string;
    public droneSerialNumber!: string;

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
                droneSerialNumber: DataTypes.STRING,
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