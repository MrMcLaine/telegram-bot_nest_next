import {Injectable, OnModuleInit} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import TelegramBot = require('node-telegram-bot-api');
import {log} from "util";

@Injectable()
export class BotService implements OnModuleInit {
    constructor(private readonly prisma: PrismaService) {
    }

    async onModuleInit() {
        await this.botMessage();
    }

    async botMessage() {
        const bot = new TelegramBot(process.env.BOT_API_TOKEN, {polling: true});

        bot.on('new_chat_members', (msg) => {
            bot.sendMessage(msg.chat.id, `Привіт, ${msg.new_chat_members[0].first_name}! Я бот цього чату, якщо ви хочете відправити повідомлення, слідкувати за вашою поведінкою`);
        })

        bot.on('message', (msg) => {
            console.log(msg);
            if (msg?.sticker) {
                if(msg?.sticker.emoji === '👍') {
                    bot.sendMessage(msg.chat.id, 'Репутація підвищена');
                }
            }
        })
    }
}