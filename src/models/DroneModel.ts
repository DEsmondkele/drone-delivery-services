import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Medication from './MedicationModel';
import AuditLog from './AuditLog';

class Drone extends Model {
    // Define your Medication model attributes here
    public id!: number;
    public serialNumber!: string;
    public model!: string;
    public weightLimit!: number;
    public batteryCapacity!: number;
    public state!: string;
    public medication!: Medication| null;
    public auditLog!: AuditLog| null;


    static initModel(sequelize: any) {
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
     medication:{
      type:DataTypes.JSON,
     },
      auditLog:{
        type:DataTypes.JSON,
      }
            },
            {
                sequelize,
                modelName: 'Drone',
            }
        );
    }
}
Drone.initModel(sequelize);

export default Drone;
