"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const BaseEvent_1 = require("../lib/structs/BaseEvent");
class default_1 extends BaseEvent_1.BaseEvent {
    constructor() {
        super("interactionCreate");
    }
    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName);
            if (!cmd)
                return;
            await interaction.deferReply({ ephemeral: cmd.ephemeral });
            cmd.execute(client, interaction).catch((error) => {
                //reply saying xyz errored
                console.warn(`Command ${interaction.commandName} errored`);
                console.warn((0, util_1.inspect)(error));
            });
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpb25DcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL2ludGVyYWN0aW9uQ3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQStCO0FBRS9CLHdEQUFxRDtBQUVyRCxlQUFxQixTQUFRLHFCQUFTO0lBQ2xDO1FBQ0ksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBaUIsRUFBRSxXQUF3QjtRQUNyRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDeEQsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsT0FBTTtZQUVoQixNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7WUFFMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzdDLDBCQUEwQjtnQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLFdBQVcsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxDQUFBO2dCQUMxRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUEsY0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDaEMsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7Q0FDSjtBQWxCRCw0QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlcmFjdGlvbiB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xyXG5pbXBvcnQgeyBCb3RDbGllbnQgfSBmcm9tIFwiLi4vbGliL0JvdENsaWVudFwiO1xyXG5pbXBvcnQgeyBCYXNlRXZlbnQgfSBmcm9tIFwiLi4vbGliL3N0cnVjdHMvQmFzZUV2ZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEJhc2VFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImludGVyYWN0aW9uQ3JlYXRlXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBleGVjdXRlKGNsaWVudDogQm90Q2xpZW50LCBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmIChpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSBjbGllbnQuY29tbWFuZHMuZ2V0KGludGVyYWN0aW9uLmNvbW1hbmROYW1lKVxyXG4gICAgICAgICAgICBpZiAoIWNtZCkgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5kZWZlclJlcGx5KHsgZXBoZW1lcmFsOiBjbWQuZXBoZW1lcmFsIH0pXHJcblxyXG4gICAgICAgICAgICBjbWQuZXhlY3V0ZShjbGllbnQsIGludGVyYWN0aW9uKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vcmVwbHkgc2F5aW5nIHh5eiBlcnJvcmVkXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbW1hbmQgJHtpbnRlcmFjdGlvbi5jb21tYW5kTmFtZX0gZXJyb3JlZGApXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oaW5zcGVjdChlcnJvcikpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19