import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Mutation {
        createDrone(input: DroneInput): Drone
        createMedication(input: MedicationInput): Medication
        createAuditLog(input: AuditLogInput): AuditLog
    }

    input DroneInput {
        serialNumber: String!
        model: String!
        weightLimit: Int!
        batteryCapacity: Int!
        state: String!
    }

    input MedicationInput {
        name: String!
        weight: Int!
        code: String!
        image: String!
    }

    input AuditLogInput {
        droneSerialNumber: String!
        batteryLevel: Int!
        timestamp: String! # Represent the timestamp as a string in ISO 8601 format
    }
`;

export default typeDefs;
