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
Object.defineProperty(exports, "__esModule", { value: true });
// init.ts
const config_1 = require("../config");
// Define an initialization function
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Sync the models with the database
            yield config_1.sequelize.sync({ force: true }); // The 'force' option recreates tables (use with caution)
            // Additional initialization logic can go here, e.g., preloading data
            console.log('Database initialized successfully');
        }
        catch (error) {
            console.error('Error initializing the database:', error);
        }
    });
}
// Export the initialization function
exports.default = initializeDatabase;
//# sourceMappingURL=Initdb.js.map