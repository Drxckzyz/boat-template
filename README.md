# boat-template

Raymond forced me to make a bot template

This template is meant is just for stupidness ig

# Getting Started

1. Rename the `config.example.ts` to `config.ts` and input all the necessary info
2. Run `npm start` and your good to go

# Scripts

- `npm run build` - Builds to code
- `npm run deploy` - Deploys the Slash Commands
- `npm start` - Builds the code then starts the bot

## Modules

1. The `lib` folder in the `src` folder holds all the Modules and structures for the code
2. The `modules` folder holds all the modules the `BotClient` uses like the `Toolbox` in which you can add helper functions to

## Create a Command or an Event

Just follow the format seen in the already setup events for you and be sure to look in `src/lib/structs/BaseEvent or Command` on how to setup it up or if you want to add anything else
