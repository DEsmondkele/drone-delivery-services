import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import Drone from "./Drone";

interface AuditLogAttributes {
    droneSerialNumber: string;
    batteryLevel: number;
    timestamp: Date;
}

class AuditLog extends Model<AuditLogAttributes> implements AuditLogAttributes {
    public droneSerialNumber!: string;
    public batteryLevel!: number;
    public timestamp!: Date;

    public static associate(models: any): void {
        AuditLog.belongsTo(models.Drone, {
            foreignKey: 'droneSerialNumber',
            as: 'auditLogs',
        });
    }
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
