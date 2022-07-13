import { Client, Intents } from 'discord.js';
import * as handler from './handler';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});

client
.on('ready', handler.ready)
// .on('interactionCreate', handler.interaction)
// .on('messageCreate', handler.message)
// .on('guildCreate', handler.guild)
// .on('voiceStateUpdate', handler.voiceStateUpdate)
.login();