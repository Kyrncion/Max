import { GuildMember, MessageEmbed, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "testing",
  description: "send an embed",

  permissions: ["ADMINISTRATOR"],

  ownerOnly: true,

  callback: async ({ message, text }) => {
    const embed = new MessageEmbed()
      .setColor('#FF0000')
      .setTitle("All Scripts Injected Successfully!")
      .addFields(
        {
          name: "Latest Repo Version",
          value: "17.23.5",
        }
      )
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
