"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BotClient_1 = require("./lib/BotClient");
const config = __importStar(require("./config"));
const client = new BotClient_1.BotClient(config.CLIENT_OPTIONS);
client.start(config.BOT_TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTRDO0FBQzVDLGlEQUFrQztBQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm90Q2xpZW50IH0gZnJvbSBcIi4vbGliL0JvdENsaWVudFwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBCb3RDbGllbnQoY29uZmlnLkNMSUVOVF9PUFRJT05TKVxyXG5jbGllbnQuc3RhcnQoY29uZmlnLkJPVF9UT0tFTikiXX0=