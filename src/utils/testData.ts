const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateDummyDrones = (count: number) => {
    const dummyDrones = [];
    for (let i = 1; i <= count; i++) {
        const drone = {
            serialNumber: `DRONE00${i}`,
            model: `Model ${i}`,
            weightLimit: generateRandomNumber(50, 200),
            batteryCapacity: generateRandomNumber(60, 100),
            state: 'IDLE',
        };
        dummyDrones.push(drone);
    }
    return dummyDrones;
};

const generateDummyMedications = (count: number) => {
    const dummyMedications = [];
    for (let i = 1; i <= count; i++) {
        const medication = {
            name: `Medication ${i}`,
            weight: generateRandomNumber(20, 100),
            code: `MED00${i}`,
            image: `medication${i}.jpg`,
        };
        dummyMedications.push(medication);
    }
    return dummyMedications;
};

export const dummyDrones = generateDummyDrones(10);
export const dummyMedications = generateDummyMedications(10);
