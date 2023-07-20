import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from "../prisma.service";
export declare class BotService implements OnModuleInit {
    private readonly prisma;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    botMessage(): Promise<void>;
}
