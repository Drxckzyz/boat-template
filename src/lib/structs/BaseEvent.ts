import { ClientEvents } from "discord.js";
import { BotClient } from "../BotClient";

export class BaseEvent {
    name: keyof ClientEvents;
    func: "on" | "once" | "off"
    constructor(name: keyof ClientEvents, func: "on" | "once" | "off" = "on") {
        this.name = name
        this.func = func
    }
    async execute(client: BotClient, ...data: any): Promise<any> {
        throw new Error("This Event does not have a execute function")
    }
}