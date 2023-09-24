"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const medicationRoutes_1 = __importDefault(require("./src/routes/medicationRoutes"));
const droneRoutes_1 = __importDefault(require("./src/routes/droneRoutes"));
const Initdb_1 = __importDefault(require("./src/utils/Initdb")); // Import your database initialization script
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
// Initializing the database before setting up routes
(0, Initdb_1.default)().then(() => {
    app.use('/api', medicationRoutes_1.default);
    app.use('/api', droneRoutes_1.default);
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Server is running on port ${port}`);
    }));
}).catch((error) => {
    console.error('Error initializing the database:', error);
});
//# sourceMappingURL=App.js.map