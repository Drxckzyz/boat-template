"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = require("../lib/structs/BaseEvent");
class default_1 extends BaseEvent_1.BaseEvent {
    constructor() {
        super("ready");
    }
    async execute(client) {
        console.log(`${client.user.tag} is now Online in ${client.guilds.cache.size} Guilds!`);
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL3JlYWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0RBQXFEO0FBRXJELGVBQXFCLFNBQVEscUJBQVM7SUFDbEM7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBaUI7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQTtJQUMxRixDQUFDO0NBQ0o7QUFQRCw0QkFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdENsaWVudCB9IGZyb20gXCIuLi9saWIvQm90Q2xpZW50XCI7XHJcbmltcG9ydCB7IEJhc2VFdmVudCB9IGZyb20gXCIuLi9saWIvc3RydWN0cy9CYXNlRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQmFzZUV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwicmVhZHlcIilcclxuICAgIH1cclxuICAgIGFzeW5jIGV4ZWN1dGUoY2xpZW50OiBCb3RDbGllbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2NsaWVudC51c2VyLnRhZ30gaXMgbm93IE9ubGluZSBpbiAke2NsaWVudC5ndWlsZHMuY2FjaGUuc2l6ZX0gR3VpbGRzIWApXHJcbiAgICB9XHJcbn0iXX0=