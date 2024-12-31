"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Server js
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const main = async () => {
    try {
        app_1.default.listen(process.env.PORT || 4000, () => {
            console.log('Server started on port 4000');
        });
    }
    catch (error) {
        console.log(error);
    }
};
main();
