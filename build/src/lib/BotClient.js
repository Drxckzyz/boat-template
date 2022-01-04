"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotClient = void 0;
const discord_js_1 = require("discord.js");
const Toolbox_1 = require("./modules/Toolbox");
class BotClient extends discord_js_1.Client {
    commands;
    toolbox;
    constructor(options) {
        super(options);
        this.commands = new discord_js_1.Collection();
        this.toolbox = new Toolbox_1.Toolbox(this);
    }
    start(token) {
        if (!token)
            throw new Error("Token must be provided");
        else if (typeof token != "string")
            throw new TypeError("Token must be a string");
        this.toolbox.handleEvents();
        this.toolbox.handleCommands();
        return super.login(token);
    }
}
exports.BotClient = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWdEO0FBQ2hELCtDQUE0QztBQUc1QyxNQUFhLFNBQVUsU0FBUSxtQkFBTTtJQUNqQyxRQUFRLENBQTBCO0lBQ2xDLE9BQU8sQ0FBVTtJQUVqQixZQUFZLE9BQU87UUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO2FBQ2hELElBQUksT0FBTyxLQUFLLElBQUksUUFBUTtZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDN0IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FDSjtBQWxCRCw4QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIENvbGxlY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBUb29sYm94IH0gZnJvbSBcIi4vbW9kdWxlcy9Ub29sYm94XCI7XHJcbmltcG9ydCB7IEJhc2VFdmVudCB9IGZyb20gXCIuL3N0cnVjdHMvQmFzZUV2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQ2xpZW50IHtcclxuICAgIGNvbW1hbmRzOiBDb2xsZWN0aW9uPHN0cmluZywgYW55PjtcclxuICAgIHRvb2xib3g6IFRvb2xib3g7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXHJcblxyXG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSBuZXcgQ29sbGVjdGlvbigpXHJcbiAgICAgICAgdGhpcy50b29sYm94ID0gbmV3IFRvb2xib3godGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCh0b2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4gbXVzdCBiZSBwcm92aWRlZFwiKVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0b2tlbiAhPSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVG9rZW4gbXVzdCBiZSBhIHN0cmluZ1wiKVxyXG4gICAgICAgIHRoaXMudG9vbGJveC5oYW5kbGVFdmVudHMoKVxyXG4gICAgICAgIHRoaXMudG9vbGJveC5oYW5kbGVDb21tYW5kcygpXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxvZ2luKHRva2VuKVxyXG4gICAgfVxyXG59Il19