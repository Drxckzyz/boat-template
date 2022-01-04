import { BotClient } from "../lib/BotClient";
import { BaseEvent } from "../lib/structs/BaseEvent";

export default class extends BaseEvent {
    constructor() {
        super("ready")
    }
    async execute(client: BotClient): Promise<any> {
        console.log(`${client.user.tag} is now Online in ${client.guilds.cache.size} Guilds!`)
    }
}