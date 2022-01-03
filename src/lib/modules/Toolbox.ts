import { BotClient } from "../BotClient";

export class Toolbox {
    client: BotClient;

    constructor(client: BotClient) {
        this.client = client
    }
}