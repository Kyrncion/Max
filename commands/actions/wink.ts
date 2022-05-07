import { userMention } from "@discordjs/builders";
import { GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Actions",
  description: "Winks at a friend!",

  permissions: ["SEND_MESSAGES"],

  callback: async ({ message, text }) => {
    const person = message.mentions.users.first();
    if (!message.mentions.users.first())
      return message.reply("You need to mention someone to wink at them.");
    const embed = new MessageEmbed()
      .setColor("#cbe3ff")
      .setTitle(";)")
      .setDescription(`${message.author.username} winks at ${person}!`)
      .setImage("https://c.tenor.com/gUmfTgqYwdcAAAAM/cute-dog.gif");
    const newMessage = await message.reply({
      embeds: [embed],
    });
  },
} as ICommand;
    