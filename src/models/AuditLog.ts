import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Drone from './DroneModel';

class AuditLog extends Model {

    public droneSerialNumber!: string;
    public batteryLevel!: number;
    public timestamp!: Date;



    static initModel(sequelize: any) {
        AuditLog.init(
            {
                droneSerialNumber: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                batteryLevel: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                timestamp: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'AuditLog',
            }
        );
    }
}

AuditLog.initModel(sequelize);


export default AuditLog;
