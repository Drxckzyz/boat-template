import { BotClient } from "../BotClient";
import { readdirSync } from "fs";
import { BaseEvent } from "../structs/BaseEvent";
import { inspect } from "util";
import { BaseCommand } from "../structs/BaseCommand";

export class Toolbox {
    client: BotClient;

    constructor(client: BotClient) {
        this.client = client
    }

    async handleEvents() {
        console.log(`Loading Events`)
        readdirSync('./build/src/events').map(async (file) => {
            delete require.cache[require.resolve(`../../events/${file}`)]
            const { default: pull } = await import(`../../events/${file}`)
            const event: BaseEvent = new pull()

            this.client[event.func](event.name, (...data) => {
                event.execute(this.client, ...data).catch((e) => {
                    console.warn(`Error in ${event.name}`)
                    console.warn(inspect(e))
                })
            })
        })
    }

    async handleCommands() {
        console.log(`Loading Commands`)
        const cats = await readdirSync('./build/src/commands')
        cats.map((category) => {
            readdirSync(`./build/src/commands/${category}`).map(async (file) => {
                try {
                    delete require.cache[require.resolve(`../../commands/${category}/${file}`)]
                    const { default: pull } = await import(`../../commands/${category}/${file}`)
                    const cmd: BaseCommand = new pull()

                    if (this.client.commands.has(cmd.data.name)) this.client.commands.delete(cmd.data.name)

                    this.client.commands.set(cmd.data.name, cmd)
                } catch (e) {
                    console.warn(`Error in loading commands: ${file}`)
                    console.warn(e)
                }
            })
        })
    }
}