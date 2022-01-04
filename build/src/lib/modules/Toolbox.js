"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbox = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
class Toolbox {
    client;
    constructor(client) {
        this.client = client;
    }
    async handleEvents() {
        console.log(`Loading Events`);
        (0, fs_1.readdirSync)('./build/src/events').map(async (file) => {
            delete require.cache[require.resolve(`../../events/${file}`)];
            const { default: pull } = await Promise.resolve().then(() => __importStar(require(`../../events/${file}`)));
            const event = new pull();
            this.client[event.func](event.name, (...data) => {
                event.execute(this.client, ...data).catch((e) => {
                    console.warn(`Error in ${event.name}`);
                    console.warn((0, util_1.inspect)(e));
                });
            });
        });
    }
    async handleCommands() {
        console.log(`Loading Commands`);
        const cats = await (0, fs_1.readdirSync)('./build/src/commands');
        cats.map((category) => {
            (0, fs_1.readdirSync)(`./build/src/commands/${category}`).map(async (file) => {
                try {
                    delete require.cache[require.resolve(`../../commands/${category}/${file}`)];
                    const { default: pull } = await Promise.resolve().then(() => __importStar(require(`../../commands/${category}/${file}`)));
                    const cmd = new pull();
                    if (this.client.commands.has(cmd.data.name))
                        this.client.commands.delete(cmd.data.name);
                    this.client.commands.set(cmd.data.name, cmd);
                }
                catch (e) {
                    console.warn(`Error in loading commands: ${file}`);
                    console.warn(e);
                }
            });
        });
    }
}
exports.Toolbox = Toolbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9Ub29sYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQkFBaUM7QUFFakMsK0JBQStCO0FBRy9CLE1BQWEsT0FBTztJQUNoQixNQUFNLENBQVk7SUFFbEIsWUFBWSxNQUFpQjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDN0IsSUFBQSxnQkFBVyxFQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNqRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzdELE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsd0RBQWEsZ0JBQWdCLElBQUksRUFBRSxHQUFDLENBQUE7WUFDOUQsTUFBTSxLQUFLLEdBQWMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtZQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRTtnQkFDNUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQzVDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtvQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFBLGNBQU8sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM1QixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxnQkFBVyxFQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xCLElBQUEsZ0JBQVcsRUFBQyx3QkFBd0IsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUMvRCxJQUFJO29CQUNBLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixRQUFRLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUMzRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLHdEQUFhLGtCQUFrQixRQUFRLElBQUksSUFBSSxFQUFFLEdBQUMsQ0FBQTtvQkFDNUUsTUFBTSxHQUFHLEdBQWdCLElBQUksSUFBSSxFQUFFLENBQUE7b0JBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUV2RixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7aUJBQy9DO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLElBQUksRUFBRSxDQUFDLENBQUE7b0JBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ2xCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQTNDRCwwQkEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RDbGllbnQgfSBmcm9tIFwiLi4vQm90Q2xpZW50XCI7XHJcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IEJhc2VFdmVudCB9IGZyb20gXCIuLi9zdHJ1Y3RzL0Jhc2VFdmVudFwiO1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHsgQmFzZUNvbW1hbmQgfSBmcm9tIFwiLi4vc3RydWN0cy9CYXNlQ29tbWFuZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2xib3gge1xyXG4gICAgY2xpZW50OiBCb3RDbGllbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBCb3RDbGllbnQpIHtcclxuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGhhbmRsZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBFdmVudHNgKVxyXG4gICAgICAgIHJlYWRkaXJTeW5jKCcuL2J1aWxkL3NyYy9ldmVudHMnKS5tYXAoYXN5bmMgKGZpbGUpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKGAuLi8uLi9ldmVudHMvJHtmaWxlfWApXVxyXG4gICAgICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IHB1bGwgfSA9IGF3YWl0IGltcG9ydChgLi4vLi4vZXZlbnRzLyR7ZmlsZX1gKVxyXG4gICAgICAgICAgICBjb25zdCBldmVudDogQmFzZUV2ZW50ID0gbmV3IHB1bGwoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jbGllbnRbZXZlbnQuZnVuY10oZXZlbnQubmFtZSwgKC4uLmRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmV4ZWN1dGUodGhpcy5jbGllbnQsIC4uLmRhdGEpLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBpbiAke2V2ZW50Lm5hbWV9YClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oaW5zcGVjdChlKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBoYW5kbGVDb21tYW5kcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBDb21tYW5kc2ApXHJcbiAgICAgICAgY29uc3QgY2F0cyA9IGF3YWl0IHJlYWRkaXJTeW5jKCcuL2J1aWxkL3NyYy9jb21tYW5kcycpXHJcbiAgICAgICAgY2F0cy5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlYWRkaXJTeW5jKGAuL2J1aWxkL3NyYy9jb21tYW5kcy8ke2NhdGVnb3J5fWApLm1hcChhc3luYyAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoYC4uLy4uL2NvbW1hbmRzLyR7Y2F0ZWdvcnl9LyR7ZmlsZX1gKV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IHB1bGwgfSA9IGF3YWl0IGltcG9ydChgLi4vLi4vY29tbWFuZHMvJHtjYXRlZ29yeX0vJHtmaWxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY21kOiBCYXNlQ29tbWFuZCA9IG5ldyBwdWxsKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpZW50LmNvbW1hbmRzLmhhcyhjbWQuZGF0YS5uYW1lKSkgdGhpcy5jbGllbnQuY29tbWFuZHMuZGVsZXRlKGNtZC5kYXRhLm5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LmNvbW1hbmRzLnNldChjbWQuZGF0YS5uYW1lLCBjbWQpXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBpbiBsb2FkaW5nIGNvbW1hbmRzOiAke2ZpbGV9YClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19