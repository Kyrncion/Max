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
      .setTitle("The God\'s Protection Is Upon This server.")
      .addFields(
        {
          name: "Anti-Nuke",
          value: `**[WORKING]** v.3.4.1`,
        },
        {
          name: "Anti-Bot",
          value: `**[WORKING]** beta v.1.3.1`,
        }
      )
      .setFooter("Spread Love not Hate");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
