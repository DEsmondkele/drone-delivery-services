import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Drone from './DroneModel';

interface AuditLogAttributes {
    droneSerialNumber: string;
    batteryLevel: number;
    timestamp: Date;
}

class AuditLog extends Model<AuditLogAttributes> implements AuditLogAttributes {

    public droneSerialNumber!: string;
    public batteryLevel!: number;
    public timestamp!: Date;
}

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

AuditLog.belongsTo(Drone, {
    foreignKey: 'droneSerialNumber',
    targetKey: 'serialNumber',
});

export default AuditLog;
