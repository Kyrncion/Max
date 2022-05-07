import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "testing",
  description: "send an embed",

  permissions: ["ADMINISTRATOR"],

  callback: async ({ message, text }) => {
    const json = JSON.parse(text);

    const embed = new MessageEmbed(json);

    return embed;
  },
} as ICommand;
