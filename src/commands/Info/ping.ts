import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { BotClient } from "../../lib/BotClient";
import { BaseCommand } from "../../lib/structs/BaseCommand"

export default class extends BaseCommand {
    constructor() {
        super(data)
    }

    async execute(client: BotClient, int: CommandInteraction): Promise<any> {
        return int.followUp(`Pong! \`${client.ws.ping}ms\``)
    }
}

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the bot latency")
    .toJSON()