import { CommandInteraction, PermissionString } from "discord.js";
import { BotClient } from "../BotClient";

export class BaseCommand {
    data: any;
    ephemeral: boolean;
    constructor(data: any, ephemeral: boolean = false) {
        this.data = data
        this.ephemeral = ephemeral
    }
    async execute(client: BotClient, command: CommandInteraction): Promise<any | void> {
        throw new Error("Command does not have its own execute function")
    }
}