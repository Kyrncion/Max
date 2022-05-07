import DJS from "discord.js";
import { ICommand } from "wokcommands";
import welcomeSchema from "../../models/welcome-schema";

export default {
  category: "test",
  description: "test",

  Permissions: ["ADMINISTRATOR"],

  minArgs: 2,
  expectedArgs: "<channel> <text>",

  slash: "both",

  options: [
    {
      name: "channel",
      description: "The target channel.",
      required: true,
      type: DJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
    },
    {
      name: "text",
      description: "Welcome message",
      required: true,
      type: DJS.Constants.ApplicationCommandOptionTypes.STRING,
    },
  ],

  callback: async ({ guild, message, interaction, args }) => {
    if (!guild) {
      return "Please use this command within a server.";
    }

    const target = message
      ? message.mentions.channels.first()
      : interaction.options.getChannel("channel");
    if (!target || target.type !== "GUILD_TEXT") {
      return "Please tag a text channel.";
    }

    let text = interaction?.options.getString("text");
    if (message) {
      args.shift();
      text = args.join(" ");
    }

    await welcomeSchema.findOneAndUpdate(
      {
        _id: guild.id,
      },
      {
        _id: guild.id,
        text,
        channelId: target.id,
      },
      {
        upsert: true,
      }
    );

    return "Welcome channel has been set!";
  },
} as ICommand;
