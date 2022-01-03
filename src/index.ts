import { BotClient } from "./lib/BotClient";
import * as config from "./config"

const client = new BotClient(config.CLIENT_OPTIONS)
client.start(config.BOT_TOKEN)