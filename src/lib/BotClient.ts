import { Client, Collection } from "discord.js";
import { Toolbox } from "./modules/Toolbox";
import { BaseEvent } from "./structures/BaseEvent";

export class BotClient extends Client {
    commands: Collection<string, any>;
    toolbox: Toolbox;

    constructor(options) {
        super(options)

        this.commands = new Collection()
        this.toolbox = new Toolbox(this)
    }

    start(token: string) {
        return super.login(token)
    }
}