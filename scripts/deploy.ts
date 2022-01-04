import { REST } from '@discordjs/rest'
import { Routes } from "discord-api-types/v9"
import { readdirSync } from "fs"
import { BaseCommand } from "../src/lib/structs/BaseCommand"
import * as config from "../src/config"

const commands = []
const rest = new REST({ version: "9" }).setToken(config.BOT_TOKEN)

async function run() {
    await getCommands()
    if (config.DEPLOY_COMMANDS_GLOBAL) {
        rest.put(Routes.applicationCommands(config.CLIENT_ID), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
    } else {
        rest.put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
    }
}

// very bad code
async function getCommands() {
    const files: { category: string; file: string }[] = []

    const cats = await readdirSync('./build/src/commands')
    cats.forEach((category) => {
        readdirSync(`./build/src/commands/${category}`).forEach((file) => {
            files.push({ category, file })
        })
    })

    await new Promise(async (resolve) => {
        files.map(async ({ category, file }) => {
            delete require.cache[require.resolve(`../src/commands/${category}/${file}`)]
            const { default: pull } = await import(`../src/commands/${category}/${file}`)
            const cmd: BaseCommand = new pull()

            commands.push(cmd.data)
            if (commands.length === files.length) resolve(null)
        })
    })
}

run()