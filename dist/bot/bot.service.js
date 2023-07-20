"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const TelegramBot = require("node-telegram-bot-api");
let BotService = exports.BotService = class BotService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async onModuleInit() {
        await this.botMessage();
    }
    async botMessage() {
        const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true });
        bot.on('new_chat_members', (msg) => {
            bot.sendMessage(msg.chat.id, `Привіт, ${msg.new_chat_members[0].first_name}! Я бот цього чату, якщо ви хочете відправити повідомлення, слідкувати за вашою поведінкою`);
        });
    }
};
exports.BotService = BotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BotService);
//# sourceMappingURL=bot.service.js.map