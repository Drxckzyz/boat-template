import { Interaction } from "discord.js";
import { BotClient } from "../lib/BotClient";
import { BaseEvent } from "../lib/structures/BaseEvent";

export default class extends BaseEvent {
    constructor() {
        super("interactionCreate")
    }
    async execute(client: BotClient, interaction: Interaction): Promise<any> {

    }
}