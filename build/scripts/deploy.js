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
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const fs_1 = require("fs");
const config = __importStar(require("../src/config"));
const commands = [];
const rest = new rest_1.REST({ version: "9" }).setToken(config.BOT_TOKEN);
async function run() {
    await getCommands();
    if (config.DEPLOY_COMMANDS_GLOBAL) {
        rest.put(v9_1.Routes.applicationCommands(config.CLIENT_ID), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
    }
    else {
        rest.put(v9_1.Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
    }
}
// very bad code
async function getCommands() {
    const files = [];
    const cats = await (0, fs_1.readdirSync)('./build/src/commands');
    cats.forEach((category) => {
        (0, fs_1.readdirSync)(`./build/src/commands/${category}`).forEach((file) => {
            files.push({ category, file });
        });
    });
    await new Promise(async (resolve) => {
        files.map(async ({ category, file }) => {
            delete require.cache[require.resolve(`../src/commands/${category}/${file}`)];
            const { default: pull } = await Promise.resolve().then(() => __importStar(require(`../src/commands/${category}/${file}`)));
            const cmd = new pull();
            commands.push(cmd.data);
            if (commands.length === files.length)
                resolve(null);
        });
    });
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyaXB0cy9kZXBsb3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXNDO0FBQ3RDLDZDQUE2QztBQUM3QywyQkFBZ0M7QUFFaEMsc0RBQXVDO0FBRXZDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7QUFFbEUsS0FBSyxVQUFVLEdBQUc7SUFDZCxNQUFNLFdBQVcsRUFBRSxDQUFBO0lBQ25CLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNyRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2FBQ3hFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7U0FBTTtRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsV0FBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7YUFDeEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUFFRCxnQkFBZ0I7QUFDaEIsS0FBSyxVQUFVLFdBQVc7SUFDdEIsTUFBTSxLQUFLLEdBQXlDLEVBQUUsQ0FBQTtJQUV0RCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsZ0JBQVcsRUFBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN0QixJQUFBLGdCQUFXLEVBQUMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixRQUFRLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzVFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsd0RBQWEsbUJBQW1CLFFBQVEsSUFBSSxJQUFJLEVBQUUsR0FBQyxDQUFBO1lBQzdFLE1BQU0sR0FBRyxHQUFnQixJQUFJLElBQUksRUFBRSxDQUFBO1lBRW5DLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3ZCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFU1QgfSBmcm9tICdAZGlzY29yZGpzL3Jlc3QnXHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJkaXNjb3JkLWFwaS10eXBlcy92OVwiXHJcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSBcImZzXCJcclxuaW1wb3J0IHsgQmFzZUNvbW1hbmQgfSBmcm9tIFwiLi4vc3JjL2xpYi9zdHJ1Y3RzL0Jhc2VDb21tYW5kXCJcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9zcmMvY29uZmlnXCJcclxuXHJcbmNvbnN0IGNvbW1hbmRzID0gW11cclxuY29uc3QgcmVzdCA9IG5ldyBSRVNUKHsgdmVyc2lvbjogXCI5XCIgfSkuc2V0VG9rZW4oY29uZmlnLkJPVF9UT0tFTilcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgIGF3YWl0IGdldENvbW1hbmRzKClcclxuICAgIGlmIChjb25maWcuREVQTE9ZX0NPTU1BTkRTX0dMT0JBTCkge1xyXG4gICAgICAgIHJlc3QucHV0KFJvdXRlcy5hcHBsaWNhdGlvbkNvbW1hbmRzKGNvbmZpZy5DTElFTlRfSUQpLCB7IGJvZHk6IGNvbW1hbmRzIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBhcHBsaWNhdGlvbiBjb21tYW5kcy4nKSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXN0LnB1dChSb3V0ZXMuYXBwbGljYXRpb25HdWlsZENvbW1hbmRzKGNvbmZpZy5DTElFTlRfSUQsIGNvbmZpZy5HVUlMRF9JRCksIHsgYm9keTogY29tbWFuZHMgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIGFwcGxpY2F0aW9uIGNvbW1hbmRzLicpKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHZlcnkgYmFkIGNvZGVcclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tbWFuZHMoKSB7XHJcbiAgICBjb25zdCBmaWxlczogeyBjYXRlZ29yeTogc3RyaW5nOyBmaWxlOiBzdHJpbmcgfVtdID0gW11cclxuXHJcbiAgICBjb25zdCBjYXRzID0gYXdhaXQgcmVhZGRpclN5bmMoJy4vYnVpbGQvc3JjL2NvbW1hbmRzJylcclxuICAgIGNhdHMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICByZWFkZGlyU3luYyhgLi9idWlsZC9zcmMvY29tbWFuZHMvJHtjYXRlZ29yeX1gKS5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVzLnB1c2goeyBjYXRlZ29yeSwgZmlsZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgZmlsZXMubWFwKGFzeW5jICh7IGNhdGVnb3J5LCBmaWxlIH0pID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKGAuLi9zcmMvY29tbWFuZHMvJHtjYXRlZ29yeX0vJHtmaWxlfWApXVxyXG4gICAgICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IHB1bGwgfSA9IGF3YWl0IGltcG9ydChgLi4vc3JjL2NvbW1hbmRzLyR7Y2F0ZWdvcnl9LyR7ZmlsZX1gKVxyXG4gICAgICAgICAgICBjb25zdCBjbWQ6IEJhc2VDb21tYW5kID0gbmV3IHB1bGwoKVxyXG5cclxuICAgICAgICAgICAgY29tbWFuZHMucHVzaChjbWQuZGF0YSlcclxuICAgICAgICAgICAgaWYgKGNvbW1hbmRzLmxlbmd0aCA9PT0gZmlsZXMubGVuZ3RoKSByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbnJ1bigpIl19