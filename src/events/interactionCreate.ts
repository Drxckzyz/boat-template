import { Interaction } from "discord.js";
import { inspect } from "util";
import { BotClient } from "../lib/BotClient";
import { BaseEvent } from "../lib/structs/BaseEvent";

export default class extends BaseEvent {
    constructor() {
        super("interactionCreate")
    }
    async execute(client: BotClient, interaction: Interaction): Promise<any> {
        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName)
            if (!cmd) return

            await interaction.deferReply({ ephemeral: cmd.ephemeral })

            cmd.execute(client, interaction).catch((error) => {
                //reply saying xyz errored
                console.warn(`Command ${interaction.commandName} errored`)
                console.warn(inspect(error))
            })
        }
    }
}