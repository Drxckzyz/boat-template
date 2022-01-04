import { Client, Collection } from "discord.js";
import { Toolbox } from "./modules/Toolbox";
import { BaseEvent } from "./structs/BaseEvent";

export class BotClient extends Client {
    commands: Collection<string, any>;
    toolbox: Toolbox;

    constructor(options) {
        super(options)

        this.commands = new Collection()
        this.toolbox = new Toolbox(this)
    }

    start(token: string) {
        if (!token) throw new Error("Token must be provided")
        else if (typeof token != "string") throw new TypeError("Token must be a string")
        this.toolbox.handleEvents()
        this.toolbox.handleCommands()
        return super.login(token)
    }
}