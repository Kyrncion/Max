import DiscordJS, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import testSchema from "./test-schema";

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});

client.on("ready", async () => {
  console.log("Max wakes up and stretches his paws!");
  client.user?.setPresence({
    activities: [
      {
        name: "Minecraft | Max!Help",
        type: "STREAMING",
        url: "https://twitch.tv/kyrncion",
      },
    ],
    status: "idle",
  });

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    featuresDir: path.join(__dirname, "features"),
    typeScript: true,
    testServers: ["971973396105691156"],
    botOwners: ["803402194882658314"],
    mongoUri: process.env.MONGO_URI,
  });

  setTimeout(async () => {
    await new testSchema({
      message: "[SERVER] Max has been connected to the datalake.",
    }).save();
  }, 1000);
});

client.login(process.env.TOKEN);
